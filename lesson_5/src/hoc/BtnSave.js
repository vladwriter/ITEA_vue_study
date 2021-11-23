export const BtnSave = btn => ({
  functional: true,
  name: 'BtnSave',
  data() {
    return {
    }
  },
  props:{
    firstName:String,
    lastName: String
  },
  methods: {
  },
  render(h, context) {
    return h(
      btn,
      {
        ...context.data,
        on:{
          ['save-data']: ()=>{
            console.log("Firstname is -" + context.props.firstName)
            console.log("Lastname is -" + context.props.lastName)
            localStorage.firstName = context.props.firstName
            localStorage.lastName = context.props.lastName
          }
        }
      },
      context.children
    )
  }
})