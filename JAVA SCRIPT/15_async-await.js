async function getData() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(100)
        }, 3500);
    })
}

async function main(){
    console.log("Loading modules");
    console.log("Load data");
    let data = await getData()
    console.log(data);
    console.log("process data");
    console.log("task 2");
}

main()