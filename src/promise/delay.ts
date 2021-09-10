export function delay(milliseconds: number): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            console.log(`${milliseconds}ms 후, delay가 호출되었어요!`)
            resolve(`${milliseconds}`)
        }, milliseconds)
    })
}