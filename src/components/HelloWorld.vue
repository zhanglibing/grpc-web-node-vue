<template>
  <div class="container">
    <div class="row" id="first">
      <div class="form-group">
        <div class="input-group">
          <input v-model="inputVal" type="text" class="form-control" id="msg">
          <span class="input-group-btn">
            <button @click="send" class="btn btn-primary" type="button" id="send">Send
            </button>
          </span>
        </div>
        <p class="help-block">Example: "Hello", "4 Hello"</p>
      </div>
      <div>{{response}}</div>
    </div>
  </div>
</template>

<script>

    import { server } from "@/util/server";

    export default {
        data: function() {
            return {
                inputVal: {id:6},
                response: ""
            };
        },
        methods: {
            send() {
                server
                    .request( {id:6})
                    .then(data => {
                        this.response=data
                        console.log(data);
                    })
                    .catch(err => {
                        this.response=err
                        console.log(err);
                    });
            }
        }
    };
</script>
