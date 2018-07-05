<template>
    <div class="P-campaign">
      <div class="addBtn">
          <el-button type="primary" @click="add()">新增 </el-button>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%" >
        <el-table-column
        prop="date"
        label="日期"
        width="180">
        </el-table-column>
        <el-table-column
        prop="name"
        label="姓名"
        width="180">
        </el-table-column>
        <el-table-column
        prop="address"
        label="地址">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pagesSizes"
        :page-size="pagesSize"
        layout="prev, pager, next,jumper, sizes,total"
        :total="total">
        </el-pagination>
      </div>
    </div>
</template>

<script>
import './campaign.less'
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        currentPage:1,
        total:200,
        pagesSize:10,
        pagesSizes:[10,20,30,40,50],
        currentPage4: 4
            
      }
    },
    beforeCreate(){
        console.log(this)
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
      ,handleClick(row){

      }
      ,add(){
          this.$router.push({path:"/campaignEdit"})
      }
    }
  }
</script>