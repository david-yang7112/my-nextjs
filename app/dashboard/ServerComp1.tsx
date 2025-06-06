
function delay<T>(data: T, ms = 2000) {
  return new Promise<T>(res => {
    console.log(`延遲${ms}ms`)
    setTimeout(() => {
      console.log('送出資料', data)
      res(data)
    }, ms);
  })
}

export async function ServerComp1() {
  console.log('exec ServerComp1')
  const data = await delay<{ name: string, age: number }>({ name: 'tester', age: 18 })
  return (
    <div className="m-2 p-2 border-4">
      <h1>[Server] Component</h1>
      <div>name: { data.name }</div>
      <div>age: { data.age }</div>
    </div>
  )
}
