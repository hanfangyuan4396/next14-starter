"use client"

const HydtraionTest = () => {
    const a = Math.random()
    console.log(a)
    return (
        <div>
            <div suppressHydrationWarning>
                水合测试：{a}
            </div>
        </div>
    )
}

export default HydtraionTest
