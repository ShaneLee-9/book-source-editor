<script setup>
import { watch, ref } from 'vue';
import { ElDialog, ElMessage } from 'element-plus';
import QRCode from 'qrcode';

const props = defineProps({
  formData: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits(['update:modelValue']);
const qrcodeURL = ref('');

const handleBeforeClose = () => {
  emits('update:modelValue', false);
};

watch(() => props.modelValue, (val) => {
  if (val) {
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--el-color-primary');

    QRCode.toDataURL(JSON.stringify(props.formData), {
      color: {
        dark: primaryColor,
      },
    })
      .then((url) => {
        qrcodeURL.value = url;
      })
      .catch((err) => {
        ElMessage.error(err);
      });
  }
});
</script>

<template>
  <el-dialog :model-value="modelValue" title="生成二维码" :before-close="handleBeforeClose">
    <div class="qrcode-container">
      <p>扫描二维码，导入书源</p>
      <img :src="qrcodeURL" alt="">
    </div>
  </el-dialog>
</template>

<style lang="scss">
.qrcode-container {
  text-align: center;

  img {
    max-width: 100%;
  }
}
</style>
