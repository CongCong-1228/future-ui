<template>
  <button class="fu-button"
          :class="classes"
  ><span class="loadingIndicator">

  </span>
    <slot/>
  </button>

</template>


<script lang="ts">
export default {
  props: {
    theme: {
      type: String,
      default: ''
    },
    plain: {
      type: Boolean,
    },
    round: {
      type: Boolean
    },
    size: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const classes = [
      `theme-${props.theme}`,
      props.plain ? 'plain' : '',
      props.round ? 'round' : '',
      props.size,
      props.disabled ? 'disabled' : '',
      props.loading ? 'loading' : '',
    ]
    return {classes}
  }
}
</script>

<style scoped lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.fu-button {
  box-sizing: border-box;
  height: $h;
  padding: 20px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  @media (max-width: 500px) {
    margin-top: 10px;
    margin-left: 10px;
  }

  &.loading {
    &:hover, &:focus {
      border: 1px solid $border-color;
      background: white;
      color: $color;
    }

    > .loadingIndicator {
      width: 14px;
      height: 14px;
      display: inline-block;
      margin-right: 4px;
      border-radius: 8px;
      border-color: $blue $blue $blue transparent;
      border-style: solid;
      border-width: 2px;
      animation: spin 1s infinite linear;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg)
      }
      100% {
        transform: rotate(360deg)
      }
    }
  }

  & + & {
    margin-left: 10px;

  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.theme-button {
    &.round {
      border-radius: 20px;
      padding: 18px 20px;
    }

    &.bigger {
      padding: 24px 20px;
      font-size: 24px;
    }

    &.big {
      padding: 20px 18px;
      font-size: 20px;
    }

    &.normal {
    }

    &.small {
      padding: 16px 14px;
      font-size: 14px;
    }

    &.smaller {
      padding: 10px 8px;
      font-size: 10px;
    }

    &.plain {
      &:hover, &:focus {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
      }
    }

    &.disabled {
      cursor: not-allowed;

      &:hover,
      &:focus {
        color: $color;
        border: 1px solid $border-color;
      }
    }
  }

  &.theme-primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;

    &.plain {
      color: #409eff;
      background: #ecf5ff;
      border-color: #b3d8ff;

      &:hover, &:focus {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
      }
    }

    &.round {
      border-radius: 20px;
      padding: 18px 20px;
    }

    &.disabled {
      cursor: not-allowed;

      &:hover,
      &:focus {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
      }
    }
  }

  &.theme-success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;

    &.plain {
      color: #67c23a;
      background: #f0f9eb;
      border-color: #c2e7b0;

      &:hover, &:focus {
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;
      }
    }

    &.round {
      border-radius: 20px;
      padding: 18px 20px;
    }

    &.disabled {
      cursor: not-allowed;

      &:hover,
      &:focus {
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;
      }
    }
  }

  &.theme-info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;

    &.plain {
      color: #909399;
      background: #f4f4f5;
      border-color: #d3d4d6;

      &:hover, &:focus {
        color: #fff;
        background-color: #909399;
        border-color: #909399;
      }
    }

    &.round {
      border-radius: 20px;
      padding: 18px 20px;
    }

    &.disabled {
      cursor: not-allowed;

      &:hover,
      &:focus {
        color: #fff;
        background-color: #909399;
        border-color: #909399;
      }
    }
  }

  &.theme-warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;

    &.plain {
      color: #e6a23c;
      background: #fdf6ec;
      border-color: #f5dab1;

      &:hover, &:focus {
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c;
      }
    }

    &.round {
      border-radius: 20px;
      padding: 18px 20px;
    }

    &.disabled {
      cursor: not-allowed;

      &:hover,
      &:focus {
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c;
      }
    }
  }

  &.theme-alert {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;

    &.plain {
      color: #f56c6c;
      background: #fef0f0;
      border-color: #fbc4c4;

      &:hover, &:focus {
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
      }
    }

    &.round {
      border-radius: 20px;
      padding: 18px 20px;
    }

    &.disabled {
      cursor: not-allowed;

      &:hover,
      &:focus {
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
      }
    }
  }

  //&.theme-primary.plain {
  //  color: #409eff;
  //  background: #ecf5ff;
  //  border-color: #b3d8ff;
  //  &:hover {
  //    color: #fff;
  //    background-color: #409eff;
  //    border-color: #409eff;
  //  }
  //}
}
</style>
