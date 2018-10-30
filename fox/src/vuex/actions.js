/**
 * Created by liying on 2018/9/27.
 */
import axios from 'axios'
export const getBannerData = ({
  commit
}, obj) => {
  axios.get('/banner').then((data) => {
    console.log(data);
    this.arr = data.data;
    // console.log(this.arr);
    commit('changeBannerData', data.data);
  })
}
