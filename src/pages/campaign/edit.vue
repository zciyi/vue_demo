<template>
    <div class="P-campaignEdit">
        <el-form ref="form" :model="form" label-width="150px">
            <el-form-item label="季度名称">
                <el-input v-model="form.name" placeholder="请输入季度名称"></el-input>
            </el-form-item>
            <el-form-item label="背景图">
                <el-upload
                class="pic-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="bgimageUrl" :src="bgimageUrl" class="pic">
                <i v-else class="el-icon-plus pic-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="类型">
                <el-checkbox v-model="type.pic">图片</el-checkbox>
                <el-checkbox v-model="type.video">视频</el-checkbox>
            </el-form-item>
            <el-form-item label="图片" v-show="type.pic">
                <el-upload
                class="pic-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog v-model="dialogVisible" size="tiny">
                <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>

                <el-form-item label="视频" v-show="type.video">
                <el-upload
                class="pic-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handleVideoCardPreview">
                <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog v-model="videoVisible" size="tiny">
                <img width="100%" :src="videoImageUrl" alt="">
                </el-dialog>
            </el-form-item>
        </el-form>
        <div class="btnCtrl">
            <el-button  size="large" @click="onSubmit">返回</el-button>
            <el-button  type="primary" size="large" @click="onSubmit">保存</el-button>
        </div>
            
    </div>
</template>

<script>
import './edit.less'
  export default {
    data() {
      return {
            form:{

            },
            dialogImageUrl: '',
            dialogVisible: false,
            bgimageUrl: '',
            videoVisible:false,
            videoImageUrl:"",
            type:{
                pic:false,
                video:false
            }
      }
    },
    beforeCreate(){
        console.log(this)
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.bgimageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleVideoCardPreview(file) {
            this.videoImageUrl = file.url;
            this.videoVisible = true;
        }
        ,onSubmit(){

        }
        ,goback(){
            this.$router.push({path:"/campaign"})
        }
    }
    ,components:{
    }
  }
</script>