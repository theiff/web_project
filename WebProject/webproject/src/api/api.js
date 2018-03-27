import Vue from 'vue'
import axios from 'axios'
export default {
    pushComment(id, x , callback) {

        axios.post('http://localhost:3000/topics/' + id, x)
        .then((response) => {
        console.log(response.data, 'suceess')
        callback(response.data)
      })
      .catch((error) => {
        console.log(error)
      })  

    }


}