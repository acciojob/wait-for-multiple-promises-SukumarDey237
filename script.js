//your JS code here. If required.
 const table_body = document.getElementById("output")
 table_body.innerHTML = `<tr>
			  <td colspan=2 id="loading"> Loading...</td>
		  </tr>`

let promise1 = new Promise((res,rej)=>{
	let time = Math.floor(Math.random()*2000)+1000
	setTimeout(()=>{
		res(time)
	},time)
})
let promise2 = new Promise((res,rej)=>{
	let time = Math.floor(Math.random()*2000)+1000
	setTimeout(()=>{
		res(time)
	},time)
})
let promise3 = new Promise((res,rej)=>{
	let time = Math.floor(Math.random()*2000)+1000
	setTimeout(()=>{
		res(time)
	},time)
})

Promise.all([promise1,promise2,promise3])
	.then(([r1,r2,r3])=>{
		table_body.innerHTML = `<tr>
			  <td>Promise 1</td>
			  <td>${(r1/1000).toFixed(3)}</td>
		  </tr><tr>
			  <td>Promise 2</td>
			  <td>${(r2/1000).toFixed(3)}</td>
		  </tr><tr>
			  <td>Promise 3</td>
			  <td>${(r3/1000).toFixed(3)}</td>
		  </tr><tr>
			  <td>Total</td>
			  <td>${(Math.max(r1,r2,r3)/1000).toFixed(3)}</td>
		  </tr>`
	}).catch((e)=>{
		table_body.innerHTML = `<tr>
			  <td colspan=2 id="loading"> Loading...</td>
		  </tr>`
	})