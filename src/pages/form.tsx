/*
 * @Author: yanhengfu 1315007322@qq.com
 * @Date: 2023-03-11 14:19:43
 * @LastEditors: yanhengfu 1315007322@qq.com
 * @LastEditTime: 2023-03-12 14:19:49
 * @FilePath: \test\my-app\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createForm } from '@formily/core'
import { FormProvider, FormConsumer, Field } from '@formily/react'
import {
  FormItem,
  FormLayout,
  Input,
  FormButtonGroup,
  Submit,
} from '@formily/antd'

const form = createForm()

export default () => {
  return (
    <div style={{ padding: '50px' }}>
      <FormProvider form={form}>
        <FormLayout layout="vertical">
          <Field
            name={'name.a'}
            title="输入框"
            required
            initialValue="Hello world"
            decorator={[FormItem]}
            component={[Input]}
          />
          <Field 
            name="input"
            title="输入框"
            required
            
            initialValue="Hello world"
            decorator={[FormItem]}
            component={[Input]}
          />
        </FormLayout>
        <FormConsumer>
          {() => (
            <div
              style={{
                marginBottom: 20,
                padding: 5,
                border: '1px dashed #666',
              }}
            >
              实时响应：{form.values.input}
            </div>
          )}
        </FormConsumer>
        <FormButtonGroup>
          <Submit onSubmit={console.log}>提交</Submit>
        </FormButtonGroup>
      </FormProvider>
    </div>

  )
}