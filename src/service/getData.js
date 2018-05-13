/**
 * Created by zc on 2017/3/18.
 * AJAX 同一管理
 */

import ajax from "@/utils/http.js";


//用户登录
var login = myData => ajax('post', '/api/user/login', myData);

//商品图片上传
var upLoadGoodsImgs = myData => ajax('post','/api/upload/img',myData);

//商品图片上传
var upLoadPayImgs = myData => ajax('post','/api/upload/img',myData);

//获取我的菜单列表
var getMenuCodeList=myData=>ajax('get','/api/permission/menu/me',myData);

//获取仓库列表
var getWarehouseList = myData=>ajax('get','/api/warehouse',myData);

//查询仓库详情
var getWarehouseInfo=id=>ajax('get','/api/warehouse/'+id);

//删除仓库
var deleteWarehouseInfo=id=>ajax('delete','/api/warehouse/'+id);

//新增仓库
var addWarehouse=myData=>ajax('post','/api/warehouse',myData);

//获取分类列表
var getCategoryList=(id)=>ajax('get','/api/categorys/'+id);

//新增分类
var addCategory=myData=>ajax('post','/api/categorys',myData);

//获取商品列表(分类id)
var getProductList=myData=>ajax('get','/api/product/category',myData);

//查询所有供应商
var getSupplierList=myData=>ajax('get','/api/supplier',myData);

//查询供应商详情
var getSupplierInfo=id=>ajax('get','/api/supplier/'+id);

//新增供应商
var addSupplier=myData=>ajax('post','/api/supplier',myData);

//删除供应商
var deleteSupplierInfo=id=>ajax('delete','/api/supplier/'+id);


//查询供应商采购记录
var getSupplierOrderHistory=(id,myData)=>ajax('get','/api/storage/supplier/'+id,myData);

//新增客户
var addCustomer=myData=>ajax('post','/api/customer',myData);

//查询所有客户
var getCustomerList=myData=>ajax('get','/api/customer',myData);

//查询客户详情
var getCustomerInfo=id=>ajax('get','/api/customer/'+id);

//查询客户交易记录
var getCustomerTradeHistory=(id,myData)=>ajax('get','/api/sale/'+id,myData);

//删除客户
var deleteCustomerInfo=id=>ajax('delete','/api/customer/'+id);

//查询所有采购订单
var getPurchaseOrderList=myData=>ajax('get','/api/storage',myData);

//查询采购单详情
var getPurchaseOrderInfo=number=>ajax('get','/api/storage/'+number);

//获取商品列表(商品名)
var getProductListByName=myData=>ajax('get','/api/product/search',myData);

//获取商品列表(热/滞销)
var getHotOrColdProductList=myData=>ajax('get','/api/report/hot_cold_sale',myData);

//生产商品条码
var generateBarCode=myData=>ajax('get','/api/until/bar_code',myData);

//获取我的信息,校验token
var getMyUserInfo=myData=>ajax('get','/api/user/me',myData);

//新增商品
var addProduct=myData=>ajax('post','/api/product',myData);

//新增店长
var addStoreManager=myData=>ajax('post','/api/user/register',myData);

//更新店长信息
var updateStoreManager=myData=>ajax('post','/api/',myData);

//查询店长信息
var getStoreManagerInfo=name=>ajax('get','/api/user/me',+name);

//检查用户名
var getCheckName=myData=>ajax('get','/api/user/check_username',myData);

//新增入库单
var addPurchaseOrder=myData=>ajax('post','/api/storage',myData);

//查询单个商品（商品id）
var getProductById=id=>ajax('get','/api/product/'+id);

//查询销售历史订单
var getSellHistoryList=myData=>ajax('get','/api/sale/sale_table',myData);

//查询临期商品
var getEarlyWarningList=(myData,days)=>ajax('get','/api/product/nearDay/'+days,myData);

//查询库存不足商品
var getStockWarningList=(myData,numbers)=>ajax('get','/api/product/lowWarning/'+numbers,myData);

//客户欠款查询
var getCustomerDebtList=myData=>ajax('get','/api/report/customer_debt',myData);

//供应商对账查询
var getSupplierDebtList=myData=>ajax('get','/api/supplier',myData);

//销售汇总查询
var getSellTotal=myData=>ajax('get','/api/sale/total',myData);


export {
  login,
  getMenuCodeList,
  upLoadGoodsImgs,
  getWarehouseList,
  upLoadPayImgs,
  getCategoryList,
  getProductList,
  getHotOrColdProductList,
  getSupplierList,
  getCustomerList,
  getPurchaseOrderList,
  getProductListByName,
  generateBarCode,
  getMyUserInfo,
  addProduct,
  addCategory,
  getSellHistoryList,
  getEarlyWarningList,
  getCustomerDebtList,
  getSupplierDebtList,
  getSellTotal,
  getSupplierInfo,
  getCustomerInfo,
  getCustomerTradeHistory,
  getWarehouseInfo,
  getPurchaseOrderInfo,
  addWarehouse,
  addCustomer,
  addSupplier,
  getSupplierOrderHistory,
  addPurchaseOrder,
  addStoreManager,
  deleteWarehouseInfo,
  deleteSupplierInfo,
  getStockWarningList,
  getProductById,
  deleteCustomerInfo,
  getCheckName,
  getStoreManagerInfo,
  updateStoreManager
}
