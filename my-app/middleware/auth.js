export default function ({ store, error }) {
    if (!store.state.authUser) {
      error({
        message: '你没有登录呀~',
        statusCode: 403
      })
    }
  }
  