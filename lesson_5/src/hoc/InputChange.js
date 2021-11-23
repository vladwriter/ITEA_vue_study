export const InputChange = btn => ({
  functional: true,
  name: 'InputChange',
  data() {
    return {
    }
  },
  props:{
    value: {
      type: String,
      default: 'Input filter'
    },
  },
  methods: {
  },
  render(h, context) {
    return h(
      btn,
      {
        ...context.data,
        on:{
          ['change-data']: ()=>{
            console.log(context.props.value)
          }
        }
      },
      context.children
    )
  }
})