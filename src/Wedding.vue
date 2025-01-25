<template>
  <div class="container">
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <p>我们的结婚日期是？</p>
        <input type="text" v-model="userAnswer" placeholder="请输入 mmdd" />
        <button @click="submitAnswer">提交</button>
      </div>
    </div>
    <div v-else class="wedding">
      <Editor/>
    </div>
  </div>
</template>

<script>
  import Editor from "./components/Editor.vue"

  export default {
    props: [],
    components: {
      Editor
    },
    data() {
      return {
        showModal: true
      }
    },
    name: 'Wedding',
    methods:{
      submitAnswer() {
        if (this.userAnswer.toLowerCase() == '1018') {
          this.showModal = false; // 提交后隐藏模态框
        } else {
          alert('再试试！');
        }
      },
    }
  }

</script>

<style lang="less">
@import './assets/base.less';
html,
body{
  height: 100%;
}

.container {
  height: 100%;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 300px;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
.wedding{
  position: relative;
  height: 100%;
  min-height: 100%;
  margin: 0 auto;
  background: #2B2B48;
}
</style>
