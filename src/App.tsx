/*
 * @Author: yanhengfu 1315007322@qq.com
 * @Date: 2023-03-11 14:19:43
 * @LastEditors: yanhengfu 1315007322@qq.com
 * @LastEditTime: 2023-03-12 14:19:17
 * @FilePath: \my-app\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * 
 */
import { Routes, Route, Link } from 'react-router-dom'
import Formtest from './pages/form'
import Home from './pages/index'




export default function App() {
  return (
    <div>
      <Link to={'/'} >编辑器</Link>
      
      <Link to={'/form'}>表单</Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Formtest />} />
      </Routes>
    </div>

  )
}
