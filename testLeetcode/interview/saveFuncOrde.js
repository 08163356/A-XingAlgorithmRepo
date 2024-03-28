// 要保存的列表
const dataList = [1, 2, 3, 4, 5];

// 保存的接口函数
async function saveData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, Math.random() * 100);
    });
}

async function main() {
    // 串行执行，按顺序保存12345
    for (const data of dataList) {
        await saveData(data);
        console.log(`保存数据 ${data}`);
    }

    // 并行执行，顺序无关，可以并发请求
    const promises = dataList.map((data) => saveData(data));
    await Promise.all(promises);
    console.log("所有数据保存完成");
}

main();