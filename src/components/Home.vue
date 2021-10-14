<script setup>
import { ref } from 'vue';
import {
  ElCard,
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElLink,
} from 'element-plus';
// import QRCode from 'qrcode';

const formData = ref({
  enabled: true,
  bookSourceName: '',
  bookSourceUrl: '',
  bookSourceGroup: '',
  loginUrl: '',
  bookUrlPattern: '',
  header: '',
  searchUrl: '',
  ruleSearch: {
    bookList: '',
    name: '',
    author: '',
    kind: '',
    wordCount: '',
    lastChapter: '',
    intro: '',
    coverUrl: '',
    bookUrl: '',
  },
  exploreUrl: '',
  ruleExplore: {
    bookList: '',
    name: '',
    author: '',
    kind: '',
    wordCount: '',
    lastChapter: '',
    intro: '',
    coverUrl: '',
    bookUrl: '',
  },
  bookInfoInit: '',
  ruleBookInfo: {
    name: '',
    author: '',
    kind: '',
    wordCount: '',
    lastChapter: '',
    intro: '',
    coverUrl: '',
    tocUrl: '',
  },
  ruleToc: {
    chapterList: '',
    chapterName: '',
    chapterUrl: '',
    isVip: '',
    chapterInfo: '',
    nextTocUrl: '',
  },
  ruleContent: {
    content: '',
    replaceRegex: '',
    nextContentUrl: '',
  },
});

const confirm = () => {
  console.log();
};
</script>

<template>
  <div class="home">
    <el-card>
      <template #header>
        <h3>基础</h3>
      </template>
      <el-form label-width="8em">
        <el-form-item label="书源名" required><el-input v-model="formData.bookSourceName" /></el-form-item>
        <el-form-item label="书源URL" required><el-input v-model="formData.bookSourceUrl" /></el-form-item>
        <el-form-item label="书源组"><el-input v-model="formData.bookSourceGroup" /></el-form-item>
        <el-form-item label="登录URL"><el-input v-model="formData.loginUrl" /></el-form-item>
        <el-form-item label="书籍URL正则"><el-input v-model="formData.bookUrlPattern" /></el-form-item>
        <el-form-item label="请求头"><el-input v-model="formData.header" /></el-form-item>
      </el-form>
    </el-card>

    <el-card>
      <template #header>
        <h3>搜索</h3>
      </template>
      <el-form label-width="9em">
        <el-form-item label="搜索URL" required><el-input v-model="formData.searchUrl" /></el-form-item>
        <el-form-item label="书籍列表规则" required><el-input v-model="formData.ruleSearch.bookList" /></el-form-item>
        <el-form-item label="书名规则" required><el-input v-model="formData.ruleSearch.name" /></el-form-item>
        <el-form-item label="作者规则"><el-input v-model="formData.ruleSearch.author" /></el-form-item>
        <el-form-item label="分类规则"><el-input v-model="formData.ruleSearch.kind" /></el-form-item>
        <el-form-item label="字数规则"><el-input v-model="formData.ruleSearch.wordCount" /></el-form-item>
        <el-form-item label="最新章节规则"><el-input v-model="formData.ruleSearch.lastChapter" /></el-form-item>
        <el-form-item label="简介规则"><el-input v-model="formData.ruleSearch.intro" /></el-form-item>
        <el-form-item label="封面规则"><el-input v-model="formData.ruleSearch.coverUrl" /></el-form-item>
        <el-form-item label="详情页url规则" required><el-input v-model="formData.ruleSearch.bookUrl" /></el-form-item>
      </el-form>
    </el-card>

    <el-card>
      <template #header>
        <h3>发现<span class="form-header-desc">（此项可不填，若填写此项，下列表单必填项参考“搜索表单”）</span></h3>
      </template>
      <el-form label-width="9em">
        <el-form-item label="发现地址规则"><el-input v-model="formData.exploreUrl" /></el-form-item>
        <el-form-item label="书籍列表规则"><el-input v-model="formData.ruleExplore.bookList" /></el-form-item>
        <el-form-item label="书名规则"><el-input v-model="formData.ruleExplore.name" /></el-form-item>
        <el-form-item label="作者规则"><el-input v-model="formData.ruleExplore.author" /></el-form-item>
        <el-form-item label="分类规则"><el-input v-model="formData.ruleExplore.kind" /></el-form-item>
        <el-form-item label="字数规则"><el-input v-model="formData.ruleExplore.wordCount" /></el-form-item>
        <el-form-item label="最新章节规则"><el-input v-model="formData.ruleExplore.lastChapter" /></el-form-item>
        <el-form-item label="简介规则"><el-input v-model="formData.ruleExplore.intro" /></el-form-item>
        <el-form-item label="封面规则"><el-input v-model="formData.ruleExplore.coverUrl" /></el-form-item>
        <el-form-item label="详情页url规则"><el-input v-model="formData.ruleExplore.bookUrl" /></el-form-item>
      </el-form>
    </el-card>

    <el-card>
      <template #header>
        <h3>书籍</h3>
      </template>
      <el-form label-width="10em">
        <el-form-item label="书籍详情预处理规则"><el-input v-model="formData.bookInfoInit" /></el-form-item>
        <el-form-item label="书名规则" required><el-input v-model="formData.ruleBookInfo.name" /></el-form-item>
        <el-form-item label="作者规则" required><el-input v-model="formData.ruleBookInfo.author" /></el-form-item>
        <el-form-item label="分类规则"><el-input v-model="formData.ruleBookInfo.kind" /></el-form-item>
        <el-form-item label="字数规则"><el-input v-model="formData.ruleBookInfo.wordCount" /></el-form-item>
        <el-form-item label="最新章节规则"><el-input v-model="formData.ruleBookInfo.lastChapter" /></el-form-item>
        <el-form-item label="简介规则"><el-input v-model="formData.ruleBookInfo.intro" /></el-form-item>
        <el-form-item label="封面规则"><el-input v-model="formData.ruleBookInfo.coverUrl" /></el-form-item>
        <el-form-item label="目录URL规则"><el-input v-model="formData.ruleBookInfo.tocUrl" /></el-form-item>
      </el-form>
    </el-card>

    <el-card>
      <template #header>
        <h3>目录</h3>
      </template>
      <el-form label-width="8em">
        <el-form-item label="目录列表" required><el-input v-model="formData.ruleToc.chapterList" placeholder="首字符使用负号(-)可使列表反序" /></el-form-item>
        <el-form-item label="章节名称规则" required><el-input v-model="formData.ruleToc.chapterName" /></el-form-item>
        <el-form-item label="章节URL规则" required><el-input v-model="formData.ruleToc.chapterUrl" /></el-form-item>
        <el-form-item label="VIP标识"><el-input v-model="formData.ruleToc.isVip" placeholder="当结果为null false 0 时为非VIP" /></el-form-item>
        <el-form-item label="章节信息"><el-input v-model="formData.ruleToc.chapterInfo" placeholder="可调用java.timeFormat(timestamp: Long)将时间戳转为yyyy/MM/dd HH:mm格式的时间" /></el-form-item>
        <el-form-item label="目录下一页规则"><el-input v-model="formData.ruleToc.nextTocUrl" /></el-form-item>
      </el-form>
    </el-card>

    <el-card>
      <template #header>
        <h3>正文</h3>
      </template>
      <el-form label-width="11em">
        <el-form-item label="正文规则" required><el-input v-model="formData.ruleContent.content" /></el-form-item>
        <el-form-item label="正则" required><el-input v-model="formData.ruleContent.replaceRegex" /></el-form-item>
        <el-form-item label="正文下一页URL规则" required><el-input v-model="formData.ruleContent.nextContentUrl" /></el-form-item>
      </el-form>
    </el-card>

    <div class="confirm">
      <el-button type="primary" icon="el-icon-check" @click="confirm">生成二维码</el-button>
    </div>

    <div class="links">
      <el-link href="https://mp.weixin.qq.com/s/HHP-fmtE3WhX4cFAq40hPw" target="_blank" type="primary">书源教程</el-link>
      <el-link href="https://namofree.gitee.io/yuedu3/legado3_booksource_by_Namo.json" target="_blank" type="primary">书源参考</el-link>
    </div>
  </div>
</template>

<style lang="scss">
.home {
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px 0;

  .el-card + .el-card {
    margin-top: 32px;
  }

  .form-header-desc {
    color: var(--el-text-color-secondary);
    font-weight: normal;
    font-size: 12px;
  }

  .confirm,
  .links {
    margin-top: 32px;
    text-align: center;
  }

  .links .el-link {
    margin: 0 8px;
  }
}
</style>
