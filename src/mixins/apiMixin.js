import axios from 'axios';

export default {
  methods: {
    apiConfig() {
      return {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      };
    },
    authPayload(newAuthenticateObj) {
      return {
        user: {
          email: newAuthenticateObj.username,
          application: {
            app_id: 'CJIOSP-id',
            app_secret: 'CJIOSP-Vb8MQL_lFiYQ7DKjN0eCFXznKZE',
          },
          password: newAuthenticateObj.password,
        },
      };
    },
    authenticate(newAuthenticateObj) {
      axios
        .post(
          `${this.$store.state.discover.baseUrl}/users/sign_in.json`,
          this.authPayload(newAuthenticateObj),
          this.apiConfig()
        )
        .then((response) => {
          this.$store.commit('setToken', response.data.access_token);
        })
        .catch(function(error) {
          console.error('Bad Auth', error);
          this.$store.commit('setToken', '');
        });
    },
    fetchDevices() {
      let token = this.$store.state.authentication.token;
      const apiConfig = this.apiConfig();
      console.log(apiConfig);
      if (token) {
        apiConfig.headers.Authorization = `auth_token ${token}`;
        axios
          .get(
            `${this.$store.state.discover.baseUrl}/apiv1/devices.json`,
            apiConfig
          )
          .then((response) => {
              console.log(response);
              this.$store.commit('setDevices', response);
          });
      } else {
        console.error('Not Authenticated');
      }
    },
  },
};
