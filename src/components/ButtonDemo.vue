<template>
  <h1 class="title">Button按钮</h1>
  <div class="tips"><p>常用的操作按钮</p></div>
  <div class="top"><h2 style="font-weight: 600;">基本用法</h2></div>
  <div class="tips"><p>基本的按钮用法</p></div>
  <section>
    <div class="part">
      <futureButton theme="button">默认按钮</futureButton>
      <futureButton theme="primary">主要按钮</futureButton>
      <futureButton theme="success">成功按钮</futureButton>
      <futureButton theme="info">信息按钮</futureButton>
      <futureButton theme="warning">警告按钮</futureButton>
      <futureButton theme="alert">危险按钮</futureButton>
    </div>
    <div class="part">
      <futureButton theme="button" plain>朴素按钮</futureButton>
      <futureButton theme="primary" plain>主要按钮</futureButton>
      <futureButton theme="success" plain>成功按钮</futureButton>
      <futureButton theme="info" plain>信息按钮</futureButton>
      <futureButton theme="warning" plain>警告按钮</futureButton>
      <futureButton theme="alert" plain>危险按钮</futureButton>
    </div>
    <div class="part">
      <futureButton theme="button" round>圆角按钮</futureButton>
      <futureButton theme="primary" round>主要按钮</futureButton>
      <futureButton theme="success" round>成功按钮</futureButton>
      <futureButton theme="info" round>信息按钮</futureButton>
      <futureButton theme="warning" round>警告按钮</futureButton>
      <futureButton theme="alert" round>危险按钮</futureButton>
    </div>
    <div class="bottom">
      <div class="button" @click="showCode">查看代码</div>
    </div>
    <div class="code" :class="{show}">
      <div class="description">
        <p>使用 <span style="color:#31a354;">theme</span>，<span style="color:#31a354;">plain</span>，<span
            style="color:#31a354;">round</span>属性来定义Button的样式</p>
      </div>
      <pre> <code class="hljs">
<span class="hljs-tag">&lt;<span class="hljs-name">part</span></span>&gt;
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"button"</span>&gt;默认按钮&lt;<span class="hljs-name">/futureButton&gt;</span></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"primary"</span>&gt;普通按钮&lt;<span class="hljs-name">/futureButton&gt;</span></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"success"</span>&gt;成功按钮&lt;<span class="hljs-name">/futureButton&gt;</span></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"info"</span>&gt;信息按钮&lt;<span class="hljs-name">/futureButton&gt;</span></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"warning"</span>&gt;警告按钮&lt;<span class="hljs-name">/futureButton&gt;</span></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"alert"</span>&gt;危险按钮&lt;<span class="hljs-name">/futureButton&gt;</span></span>
<span class="hljs-tag">&lt;<span class="hljs-name">/part</span></span>&gt;

<span class="hljs-tag">&lt;<span class="hljs-name">part</span></span>&gt;
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"button" plain</span>&gt;默认按钮&lt;<span class="hljs-name">/futureButton&gt;</span></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"primary" plain</span>&gt;普通按钮&lt;<span class="hljs-name">/futureButton&gt;</span></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"success" plain</span>&gt;成功按钮&lt;<span class="hljs-name">/futureButton&gt;</span></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"info" plain</span>&gt;信息按钮&lt;<span class="hljs-name">/futureButton&gt;</span></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"warning" plain</span>&gt;警告按钮&lt;<span class="hljs-name">/futureButton&gt;</span></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"alert" plain</span>&gt;危险按钮&lt;<span class="hljs-name">/futureButton&gt;</span></span>
<span class="hljs-tag">&lt;<span class="hljs-name">/part</span></span>&gt;

<span class="hljs-tag">&lt;<span class="hljs-name">part</span></span>&gt;
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"button" round</span>&gt;默认按钮&lt;<span class="hljs-name">/futureButton&gt;</span></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"primary" round</span>&gt;普通按钮&lt;<span class="hljs-name">/futureButton&gt;</span></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"success" round</span>&gt;成功按钮&lt;<span class="hljs-name">/futureButton&gt;</span></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"info" round</span>&gt;信息按钮&lt;<span class="hljs-name">/futureButton&gt;</span></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"warning" round</span>&gt;警告按钮&lt;<span class="hljs-name">/futureButton&gt;</span></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"alert" round</span>&gt;危险按钮&lt;<span class="hljs-name">/futureButton&gt;</span></span>
<span class="hljs-tag">&lt;<span class="hljs-name">/part</span></span>&gt;
      </code></pre>
    </div>
  </section>

  <div class="top"><h2 style="font-weight: 600;">自定义大小</h2></div>
  <div class="tips"><p>选择适合尺寸的按钮</p></div>
  <section>
    <div class="part">
      <futureButton theme="button" size="bigger">bigger</futureButton>
      <futureButton theme="button" size="big">big</futureButton>
      <futureButton theme="button" size="normal">normal</futureButton>
      <futureButton theme="button" size="small">small</futureButton>
      <futureButton theme="button" size="smaller">smaller</futureButton>

    </div>

    <div class="bottom">
      <div class="button" @click="showCode1">查看代码</div>
    </div>
    <div class="code" :class="{show1}">
      <div class="description">
        <p>使用 <span style="color:#31a354;">size</span>
          属性来定义Button的尺寸</p>
      </div>
      <pre> <code class="hljs">
<span class="hljs-tag">&lt;<span class="hljs-name">part</span></span>&gt;
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"button"</span> <span class="hljs-name">size</span>=<span class="hljs-attr">"bigger"</span>&gt;bigger&lt;<span
      class="hljs-name">/futureButton&gt;</span></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"button"</span> <span class="hljs-name">size</span>=<span class="hljs-attr">"big"</span>&gt;big&lt;<span
      class="hljs-name">/futureButton&gt;</span></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"button"</span> <span class="hljs-name">size</span>=<span class="hljs-attr">"normal"</span>&gt;normal&lt;<span
      class="hljs-name">/futureButton&gt;</span></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"button"</span> <span class="hljs-name">size</span>=<span class="hljs-attr">"small"</span>&gt;small&lt;<span
      class="hljs-name">/futureButton&gt;</span></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"button"</span> <span class="hljs-name">size</span>=<span class="hljs-attr">"smaller"</span>&gt;smaller&lt;<span
      class="hljs-name">/futureButton&gt;</span></span>
<span class="hljs-tag">&lt;<span class="hljs-name">/part</span></span>&gt;
      </code></pre>
    </div>
  </section>

  <div class="top"><h2 style="font-weight: 600;">禁用状态</h2></div>
  <div class="tips"><p>支持按钮禁用</p></div>
  <section>
    <div class="part">
      <futureButton theme="button" disabled>默认按钮</futureButton>
      <futureButton theme="primary" disabled>主要按钮</futureButton>
      <futureButton theme="success" disabled>成功按钮</futureButton>
      <futureButton theme="info" disabled>信息按钮</futureButton>
      <futureButton theme="warning" disabled>警告按钮</futureButton>
      <futureButton theme="alert" disabled>危险按钮</futureButton>
    </div>

    <div class="bottom">
      <div class="button" @click="showCode2">查看代码</div>
    </div>
    <div class="code" :class="{show2}">
      <div class="description">
        <p>使用 <span style="color:#31a354;">disabled</span>
          属性来指定禁用状态</p>
      </div>
      <pre> <code class="hljs">
<span class="hljs-tag">&lt;<span class="hljs-name">part</span></span>&gt;
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"button" disabled</span>&gt;默认按钮&lt;<span
      class="hljs-name">/futureButton&gt;</span></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"primary" disabled</span>&gt;普通按钮&lt;<span
      class="hljs-name">/futureButton&gt;</span></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"success" disabled</span> &gt;成功按钮&lt;<span
      class="hljs-name">/futureButton&gt;</span></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"info" disabled</span>&gt;信息按钮&lt;<span
      class="hljs-name">/futureButton&gt;</span></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"warning" disabled</span>&gt;警告按钮&lt;<span
      class="hljs-name">/futureButton&gt;</span></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"alert" disabled</span>&gt;危险按钮&lt;<span
      class="hljs-name">/futureButton&gt;</span></span>
<span class="hljs-tag">&lt;<span class="hljs-name">/part</span></span>&gt;
      </code></pre>
    </div>
  </section>

  <div class="top"><h2 style="font-weight: 600;">加载状态</h2></div>
  <div class="tips"><p>支持加载中状态</p></div>
  <section>
    <div class="part">
      <futureButton theme="button" loading>加载中</futureButton>
    </div>

    <div class="bottom">
      <div class="button" @click="showCode3">查看代码</div>
    </div>
    <div class="code" :class="{show3}">
      <div class="description">
        <p>使用 <span style="color:#31a354;">loading</span>
          属性来指定加载中状态</p>
      </div>
      <pre> <code class="hljs">
<span class="hljs-tag">&lt;<span class="hljs-name">part</span></span>&gt;
  <span class="hljs-tag">&lt;<span class="hljs-name">futureButton</span> <span class="hljs-name">theme</span>=<span
      class="hljs-attr">"button" loading</span>&gt;加载中&lt;<span
      class="hljs-name">/futureButton&gt;</span></span>
<span class="hljs-tag">&lt;<span class="hljs-name">/part</span></span>&gt;
      </code></pre>
    </div>
  </section>


</template>


<script lang="ts">
import futureButton from '../libs/Button.vue'
import {ref} from "vue";

export default {
  components: {futureButton},
  setup() {
    const show = ref(false)
    const showCode = () => {
      show.value = !show.value
    }
    const show1 = ref(false)
    const showCode1 = () => {
      show1.value = !show1.value
    }
    const show2 = ref(false)
    const showCode2 = () => {
      show2.value = !show2.value
    }
    const show3 = ref(false)
    const showCode3 = () => {
      show3.value = !show3.value
    }
    return {showCode, show, show1, showCode1, show2, showCode2, show3, showCode3}
  }
}
</script>

<style lang="scss" scoped>
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
  border: 1px solid #ebebeb;
  margin-bottom: 40px;
  margin-top: 20px;

  > .part {
    margin: 20px 24px;
  }

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

    &.show1 {
      height: 300px;
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

    &.show2 {
      height: 300px;
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

    &.show3 {
      height: 200px;
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


</style>
