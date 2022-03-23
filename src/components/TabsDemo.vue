<template>
  <h1 class="title">Tabs标签页</h1>
  <div class="tips"><p>分隔内容上有关联但属于不同类别的数据集合。</p></div>
  <div class="top"><h2 style="font-weight: 600;">基本用法</h2></div>
  <div class="tips"><p>基础的、简洁的标签页。</p></div>
  <section class="section">
    <Tabs v-model:selected="selected">
      <Tab title="导航1">内容1</Tab>
      <Tab title="导航2" disabled>内容2</Tab>
    </Tabs>
    <div class="bottom">
      <div class="button" @click="showCode">查看代码</div>
    </div>
    <div class="code" :class="{show}">
      <div class="description">
        <p>使用 <span style="color:#31a354;">title</span>
          属性来指定显示标签名</p>
      </div>
      <pre> <code class="hljs">
<span class="hljs-tag">&lt;<span class="hljs-name">Tabs v-model:selected="selected"</span></span>&gt;
  <span class="hljs-tag">&lt;<span class="hljs-name">Tab title="导航1"</span> <span class="hljs-name"></span><span
      class="hljs-attr"></span>&gt;内容1&lt;<span
      class="hljs-name">/Tab&gt;</span></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Tab title="导航2"</span> <span class="hljs-name"></span><span
      class="hljs-attr"></span>&gt;内容2&lt;<span
      class="hljs-name">/Tab&gt;</span></span>
<span class="hljs-tag">&lt;<span class="hljs-name">/Tabs</span></span>&gt;

<span class="hljs-tag"><span class="hljs-name">&lt;script&gt;</span></span>
<span class="hljs-tag"><span class="hljs-name">import Tabs from fu-tabs</span>
<span class="hljs-name">import Tab from fu-tab</span>
<span class="hljs-name">import {ref} from 'vue'</span>
<span class="hljs-name">export default {</span>
    <span class="hljs-name">components: {Tabs, Tab}</span>
    <span class="hljs-name">setup() {</span>
    <span class="hljs-name">const selected = ref('导航1')</span>
    <span class="hljs-name">return {selected}</span>
  <span class="hljs-name">}</span>
<span class="hljs-name">&lt;/script&gt;</span></span>
      </code></pre>
    </div>
  </section>
  <h3>Attributes</h3>
  <table>
    <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>可选值</th>
      <th>默认值</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>:selected / v-model</td>
      <td>是否选中</td>
      <td>string</td>
      <td>———</td>
      <td>导航1</td>
    </tr>
    <tr>
      <td>title</td>
      <td>nav标题</td>
      <td>string</td>
      <td>———</td>
      <td>导航1 / 导航2</td>
    </tr>
    </tbody>
  </table>

</template>


<script lang="ts">
import Tabs from '../libs/Tabs.vue'
import Tab from '../libs/Tab.vue'
import {ref} from "vue";

export default {
  components: {Tab, Tabs},
  setup() {
    const selected = ref<String>('导航1')
    const show = ref<Boolean>(false)
    const showCode = () => {
      show.value = !show.value
    }
    return {selected, showCode, show}
  }
}
</script>


<style lang="scss">
.title {
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 36px;
}

> p {
  font-size: 18px;
  color: #5e6d82;
  line-height: 1.5em;
}

.top {
  display: flex;
  align-items: center;
  padding: 20px 20px 10px 0;
  margin-top: 20px;
}

.section {


  > .bottom {
    font-size: 24px;
    width: 100%;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    border-top: 1px solid #ebebeb;

    > .button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 6px 8px;
      border-radius: 12px;
      border: 1px solid #ebebeb;
      font-size: 14px;

      &:hover {
        cursor: pointer;
        color: #409eff;

      }
    }


  }

  > .code {
    height: 0;
    transition: all .3s;

    > .description {
      display: none;
      padding: 20px;
      box-sizing: border-box;
      border: 1px solid #ebebeb;
      border-radius: 3px;
      font-size: 14px;
      line-height: 22px;
      color: #666;
      word-break: break-word;
      margin: 10px;
      background-color: #fff;

      > p {
        color: #5e6d82;

      }
    }

    > pre {
      > .hljs {
        display: none;

      }

    }

    &.show {
      height: 500px;
      //border-top: 1px solid #ebebeb;
      > .description {
        display: block;
      }

      > pre {
        //line-height: 1.1;
        //margin: 0;

        > .hljs {
          display: block;
          line-height: 1.8;
          font-family: Menlo, Monaco, Consolas, Courier, monospace;
          font-size: 12px;
          padding: 18px 24px;
          background-color: #fafafa;
          border: 1px solid #eaeefb;
          margin-bottom: 25px;
          border-radius: 4px;
          -webkit-font-smoothing: auto;
          @media (max-width: 500px) {
            overflow-x: auto;
          }

          > .hljs-tag {

            > .hljs-name {
              color: #3182bd;
            }

            > .hljs-attr {
              color: #3182bd;
            }

            > .hljs-string {
              color: #756bb1
            }
          }
        }
      }
    }
  }
}

h3 {
  margin: 55px 0 20px;
  font-weight: 400;
  color: #1f2f3d;
  font-size: 22px;
}

table {
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
  font-size: 14px;
  margin-bottom: 45px;
  line-height: 1.5em;

  > thead {
    > tr {
      > th {
        text-align: left;
        white-space: nowrap;
        color: #909399;
        font-weight: 400;
        border-bottom: 1px solid #dcdfe6;
        padding: 15px;
        max-width: 250px;
      }
    }
  }

  > tbody {
    > tr {

      > td {
        color: #606266;
        border-bottom: 1px solid #dcdfe6;
        padding: 15px;
        max-width: 250px;
      }
    }
  }

}
</style>
