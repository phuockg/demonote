<template>
  <div>
    <ChatUser   :messages="messages" />
  </div>
</template>

<script>
import socket from '~/plugins/socket.io.js'
import ChatUser from "../../components/chat-page/ChatUser";
export default {
    asyncData(context, callback) {
        socket.emit('last-messages', function (messages) {
          callback(null, {
            messages,
          })
        })
      },
    
    beforeMount() {
      socket.on('new-message', (message) => {
        this.messages.push(message)
      })
    },
}
</script>

<style>

</style>