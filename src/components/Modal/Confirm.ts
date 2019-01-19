import { Modal } from 'antd';

const confirm = Modal.confirm

export function showDeleteConfirm(onOk: any = null) {
  confirm({
    title: '确定删除该条信息吗?',
    okText: '确定',
    cancelText: '取消',
    maskClosable: true,
    onOk
  })
}