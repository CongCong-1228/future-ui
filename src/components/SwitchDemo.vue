<template>
  <!--  v-model:value ===  :value="value"  @update:value="value=$event"  -->
  <h1 class="title">Switch开关</h1>
  <div class="tips"><p>表示两种相互对立的状态间的切换，多用于触发开关。</p></div>
  <div class="top"><h2 style="font-weight: 600;">基本用法</h2></div>
  <section class="section1">

    <div class="mid">
      <Switch v-model:value="value"
              activeColor="#409eff"
              noActiveColor="gray"
      />
    </div>
    <div class="bottom" @click="showCode">
      <div class="button">查看代码</div>
    </div>
    <div class="code" :class="{show}">
      <div class="description">
        <p>绑定 <span style="color:#31a354;">v-model</span> 到一个<span style="color:#31a354;">boolean</span>类型的变量。可以使用<span
            style="color:#31a354;">activeColor</span>属性和<span style="color:#31a354;">noActiveColor</span>属性来设置开关的背景色</p>
      </div>
      <pre><code class="hljs">
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt; </span><span class="hljs-tag">&lt;<span
          class="hljs-name">Switch</span><span class="hljs-attr">v-model:value</span>=<span
          class="hljs-string">"value"</span><span class="hljs-attr">active-color</span>=<span
          class="hljs-string">"blue"</span><span class="hljs-attr">noActiveColor</span>=<span
          class="hljs-string">"blue"</span>/&gt;</span><span class="hljs-tag">&lt;<span
          class="hljs-name">template</span>/&gt; </span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span></span> <span class="hljs-tag"><span class="hljs-name">lang</span>=<span
          class="hljs-string">"ts"</span></span>&gt;
<span class="hljs-tag"><span class="hljs-name">import</span></span> <span class="hljs-tag"><span class="hljs-name">{ Switch }</span> <span
          class="hljs-string">from</span> <span class="hljs-string">'future-ui'</span></span>
<span class="hljs-tag"><span class="hljs-name">import</span></span> <span class="hljs-tag"><span class="hljs-name">{ ref }</span> <span
          class="hljs-string">from</span> <span class="hljs-string">'vue'</span></span>

<span class="hljs-tag"><span class="hljs-name">export default</span> </span>{
 <span class="hljs-tag"><span class="hljs-name">components:{ Switch },</span></span>
 <span class="hljs-tag"><span class="hljs-name">setup() {</span></span>
 <span class="hljs-tag"><span class="hljs-name">cosnt value = ref(false)</span></span>
 <span class="hljs-tag"><span class="hljs-name">return { value }</span></span>
}
          </code>
        </pre>
    </div>
  </section>
  <div class="top"><h2 style="font-weight: 600;">支持disabled</h2></div>
  <section class="section1">

    <div class="mid">
      <Switch v-model:value="value2"
              activeColor="#409eff"
              noActiveColor="gray"
              disabled
      />
    </div>
    <div class="bottom" @click="showCode1">
      <div class="button">查看代码</div>
    </div>
    <div class="code" :class="{show1}">
      <div class="description">
        <p>支持设置 <span style="color:#31a354;">disabled</span> 属性禁用开关</p>
      </div>
      <pre><code class="hljs">
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt; </span><span class="hljs-tag">&lt;<span
          class="hljs-name">Switch</span><span class="hljs-attr">v-model:value</span>=<span
          class="hljs-string">"value2"</span> <span class="hljs-attr">disabled</span> <span
          class="hljs-name">template</span>/&gt; </span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span></span> <span class="hljs-tag"><span class="hljs-name">lang</span>=<span
          class="hljs-string">"ts"</span></span>&gt;
<span class="hljs-tag"><span class="hljs-name">import</span></span> <span class="hljs-tag"><span class="hljs-name">{ Switch }</span> <span
          class="hljs-string">from</span> <span class="hljs-string">'future-ui'</span></span>
<span class="hljs-tag"><span class="hljs-name">import</span></span> <span class="hljs-tag"><span class="hljs-name">{ ref }</span> <span
          class="hljs-string">from</span> <span class="hljs-string">'vue'</span></span>

<span class="hljs-tag"><span class="hljs-name">export default</span> </span>{
 <span class="hljs-tag"><span class="hljs-name">components:{ Switch },</span></span>
 <span class="hljs-tag"><span class="hljs-name">setup() {</span></span>
 <span class="hljs-tag"><span class="hljs-name">cosnt value = ref(false)</span></span>
 <span class="hljs-tag"><span class="hljs-name">return { value }</span></span>
}
          </code>
        </pre>

    </div>
  </section>

</template>


<script lang="ts">
import Switch from '../libs/Switch.vue'
import {ref} from "vue";

export default {
  setup() {
    const value = ref(false)
    const show = ref(false)
    const show1 = ref(false)
    const showCode = () => {
      show.value = !show.value
    }
    const showCode1 = () => {
      show1.value = !show1.value
    }
    return {value, show, show1, showCode, showCode1}
  },
  components: {Switch}
}
</script>

<style scoped lang="scss">
.title {
  margin-left: 20px;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 36px;
}

.tips {
  margin-left: 20px;

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
  margin-left: 20px;
  margin-top: 20px;
}

.section1 {
  border: 1px solid #ebebeb;
  margin: 20px;


  > .mid {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 30px;

  }

  > .bottom {
    font-size: 24px;
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    border-top: 1px solid #ebebeb;

    > .button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      padding: 8px 12px;
      border-radius: 12px;
      border: 1px solid #ebebeb;
      font-size: 18px;
    }


    &:hover {
      cursor: pointer;
      color: #409eff;

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

    &.show, &.show1 {
      height: 392px;
      //border-top: 1px solid #ebebeb;
      > .description {
        display: block;
      }

      > pre {
        //line-height: 1.1;
        //font-family: Consolas, "Courier New", Courier, monospace;
        //margin: 0;

        > .hljs {
          display: block;
          overflow: auto;
          padding: 10px 20px;
          background: #fff;

          > .hljs-tag {

            > .hljs-name {
              color: #3182bd;
            }

            > .hljs-attr {
              color: #3182bd;
            }

            > .hljs-string {
              color: #756bb1;
            }
          }
        }
      }
    }
  }

}
</style>
