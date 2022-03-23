<template>
  <h1 class="title">Dialog对话框</h1>
  <div class="tips"><p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p></div>
  <div class="top"><h2 style="font-weight: 600;">基本用法</h2></div>
  <div class="tips"><p>Dialog 弹出一个对话框，适合需要定制性更大的场景。</p></div>
  <section>
    <FutureButton class="future-button" @click="toggle">点击打开dialog</FutureButton>
    <FutureDialog v-model:visible="visible"></FutureDialog>
    <div class="bottom">
      <div class="button" @click="showCode">查看代码</div>
    </div>
    <div class="code" :class="{show}">
      <div class="description">
        <p>需要设置<span style="color:#31a354;">visible</span>属性，他接收<span style="color:#31a354;">Boolean</span>，当为<span
            style="color:#31a354;">true</span>时显示Dialog。</p>
      </div>
      <pre> <code class="hljs">
<span class="hljs-tag"><span class="hljs-name">&lt;futureButton</span> <span class="hljs-name">@click</span>=<span
    class="hljs-attr">toggle</span>&gt;点击打开diolog&lt;<span class="hljs-name">/futureButton&gt;</span></span>
<span class="hljs-tag"><span class="hljs-name">&lt;futureDialog</span> <span
    class="hljs-name">v-model:visible</span>=<span
    class="hljs-attr">visible&gt;</span></span><span class="hljs-tag"><span
          class="hljs-name">&lt;/futureDialog&gt;</span></span>

<span class="hljs-tag"><span class="hljs-name">&lt;script&gt;</span></span>
<span class="hljs-tag"><span class="hljs-name">import FutureButton from fu-button</span>
<span class="hljs-name">import FutureDialog from fu-dialog</span>
<span class="hljs-name">import {ref} from 'vue'</span>
 <span class="hljs-name">export default {</span>
    <span class="hljs-name">components: {FutureDialog, FutureButton}</span>
    <span class="hljs-name">setup() {</span>
    <span class="hljs-name">const visible = ref(false)</span>
    <span class="hljs-name">const toggle = () => {</span>
    <span class="hljs-name">visible.value = !visible.value</span>
    <span class="hljs-name">}</span>
      <span class="hljs-name">return {visible, toggle}</span>
  <span class="hljs-name">}</span>
<span class="hljs-name">&lt;/script&gt;</span>

</span>
      </code>
      </pre>
    </div>
  </section>


  <div class="top"><h2 style="font-weight: 600;">自定义标题或内容</h2></div>
  <div class="tips"><p>你可以自定义标题和内容</p></div>
  <section>
    <FutureButton class="future-button" @click="toggle1">点击打开dialog</FutureButton>
    <FutureDialog v-model:visible1="visible1">
      <template v-slot:title>
        <strong>你自定义的标题</strong>
      </template>
      <template v-slot:content>
        <p>这是你可以自定义的内容</p>
      </template>
    </FutureDialog>
    <div class="bottom">
      <div class="button" @click="showCode1">查看代码</div>
    </div>
    <div class="code" :class="{show1}">
      <div class="description">
        <p>需要设置<span style="color:#31a354;">visible</span>属性，他接收<span style="color:#31a354;">Boolean</span>，当为<span
            style="color:#31a354;">true</span>时显示Dialog。
          支持自定义 <span style="color:#31a354;">title</span>，<span style="color:#31a354;">content</span>的样式。</p>
      </div>
      <pre> <code class="hljs">
<span class="hljs-tag"><span class="hljs-name">&lt;futureButton</span> <span class="hljs-name">@click</span>=<span
    class="hljs-attr">toggle</span>&gt;点击打开diolog&lt;<span
    class="hljs-name">/futureButton&gt;</span></span>
<span class="hljs-tag"><span class="hljs-name">&lt;futureDialog</span> <span
    class="hljs-name">v-model:visible</span>=<span
    class="hljs-attr">visible&gt;</span></span>
    <span class="hljs-tag"><span class="hljs-name">&lt;template</span> <span class="hljs-name">v-slot:title&gt;</span>
    <span class="hljs-name">&lt;strong&gt;</span>你自定义的标题<span class="hljs-name">&lt;/strong&gt;</span>
    <span class="hljs-attr">&lt;/template&gt;</span></span>
    <span class="hljs-tag"><span class="hljs-name">&lt;template</span> <span class="hljs-name">v-slot:content&gt;</span>
    <span class="hljs-name">&lt;strong&gt;</span>这是你可以自定义的内容<span class="hljs-name">&lt;/strong&gt;</span>
    <span class="hljs-attr">&lt;/template&gt;</span></span>
<span class="hljs-tag"><span class="hljs-name">&lt;/futureDialog&gt;</span></span>

<span class="hljs-tag"><span class="hljs-name">&lt;script&gt;</span></span>
<span class="hljs-tag"><span class="hljs-name">import FutureButton from fu-button</span>
<span class="hljs-name">import FutureDialog from fu-dialog</span>
<span class="hljs-name">import {ref} from 'vue'</span>
 <span class="hljs-name">export default {</span>
    <span class="hljs-name">components: {FutureDialog, FutureButton}</span>
    <span class="hljs-name">setup() {</span>
    <span class="hljs-name">const visible = ref(false)</span>
    <span class="hljs-name">const toggle = () => {</span>
    <span class="hljs-name">visible.value = !visible.value</span>
    <span class="hljs-name">}</span>
      <span class="hljs-name">return {visible, toggle}</span>
  <span class="hljs-name">}</span>
<span class="hljs-name">&lt;/script&gt;</span>

</span>
      </code>
      </pre>
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
      <td>:visible / v-model</td>
      <td>是否展示</td>
      <td>boolean</td>
      <td>———</td>
      <td>false</td>
    </tr>
    <tr>
      <td>title</td>
      <td>自定义标题</td>
      <td>string</td>
      <td>———</td>
      <td>———</td>
    </tr>
    <tr>
      <td>content</td>
      <td>自定义文本</td>
      <td>string</td>
      <td>———</td>
      <td>———</td>
    </tr>
    </tbody>
  </table>

</template>


<script lang="ts">
import FutureDialog from '../libs/Dialog.vue'
import FutureButton from '../libs/Button.vue'
import {ref} from "vue";

export default {
  components: {FutureDialog, FutureButton},
  setup() {
    const visible = ref(false)
    const visible1 = ref(false)
    const toggle = () => {
      visible.value = !visible.value
    }
    const toggle1 = () => {
      visible1.value = !visible1.value
    }
    const show = ref(false)
    const showCode = () => {
      show.value = !show.value
    }
    const show1 = ref(false)
    const showCode1 = () => {
      show1.value = !show1.value
    }
    return {visible, visible1, toggle, toggle1, show, showCode, show1, showCode1}
  }
}
</script>

<style lang="scss">
.title {
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 36px;
}

.tips {

  > p {
    font-size: 18px;
    color: #5e6d82;
    line-height: 1.5em;
  }
}

.top {
  display: flex;
  align-items: center;
  padding: 20px 20px 10px 0;
  margin-top: 20px;
}

section {
  .future-button {
    margin: 20px;
  }

  border: 1px solid #ebebeb;
  margin-bottom: 40px;
  margin-top: 20px;

  > .bottom {
    font-size: 24px;
    width: 100%;
    padding: 10px 24px;
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
      height: 550px;
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

    &.show1 {
      height: 700px;
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
