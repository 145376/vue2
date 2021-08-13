import { Loading } from 'element-ui';

export default {
  methods: {
    loading: (options = {}) => {
      return Loading.service(options);
    }
  }
}