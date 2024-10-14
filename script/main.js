// 音乐播放提示
window.addEventListener('load', () => {
    Swal.fire({
        title: '嘿嘿，又见面了~ \n 快调好音量，等你说开始哦！',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '准备好了!',
        cancelButtonText: '还没呢..先不听音乐',
        customClass: {
            title: 'swal-title',
            icon: 'swal-icon'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
});



// 动画时间线
const animationTimeline = () => {

    // 打字框动画模拟
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    }

    // -------------------- 主时间线开始 --------------------

    let currentDuration = 2;
    const page1 = new TimelineMax({delay:currentDuration});

    // 显示container
    page1.to(".container", 0.6, {
        visibility: "visible"
    })

    // -------------------- page 1 --------------------
    page1.from(".nameGreet", 1.8, {
        opacity: 0,
        y: 10
    })
    page1.from(".greetingText", 1.5, {
        opacity: 0,
        y: 10
    })
    page1.to(".nameGreet",
        1.5,
        {
            opacity: 0,
            y: 10
        },
    "+=5.5")
    page1.to(".greetingText",
        1.5,
        {
            opacity: 0,
            y: 10
        },
    "-=1.5")
    // 记录当前时间
    currentDuration += page1.duration()+2;


    // -------------------- page 2 --------------------
    const page2 = new TimelineMax({delay: currentDuration});

    page2.from(".page2text", 1.8, {
        opacity: 0,
        y: 10
    })
    page2.to(".page2text",
        1.5,
        {
            opacity: 0,
            y: 10
        },
    "+=5.5")
    // 记录当前时间
    currentDuration += page2.duration()+1;



    // -------------------- page 3 --------------------
    const page3 = new TimelineMax({delay: currentDuration});

    // 打字框弹出
    page3.from(".page3", 0.7, {
        scale: 0.2,
        opacity: 0,
    })
    
    // 按钮弹出
    page3.from(".fake-btn", 0.3, {
        scale: 0.2,
        opacity: 0,
    }, "-=0.3");
    
    // 模拟输入
    page3.staggerTo(
        ".hbd-chatbox span", 
        1, 
        { visibility: "visible" }, 
        0.15
    );
    
    // 按钮变灰 after 模拟输入 is completed
    page3.to(".fake-btn", 0.1, {
        backgroundColor: "rgb(127, 206, 248)",
    }, "+=0.15"); // Add a small delay if needed
    
    // 打字框消失
    page3.to(".page3", 1.1, {
        scale: 0.2,
        opacity: 0,
        y: -150,
    }, "+=3");
    

    // 记录当前时间
    currentDuration += page3.duration()+1;


    // -------------------- page 4 --------------------
    const page4 = new TimelineMax({delay: currentDuration});

    page4.from(".page4text", 1.8, ideaTextTrans)
    page4.to(".page4text", 1.5, ideaTextTransLeave, "+=5.5")

    // 记录当前时间
    currentDuration += page4.duration()+2;


    // -------------------- page 5 --------------------
    const page5 = new TimelineMax({delay: currentDuration});

    page5.from(".page5text", 1.8, ideaTextTrans)
    page5.to(".page5text", 1.5, ideaTextTransLeave, "+=5.5")

    // 记录当前时间
    currentDuration += page5.duration()+2;


    // -------------------- page 6 --------------------
    const page6 = new TimelineMax({delay: currentDuration});

    page6.from(".page6text", 1.5, ideaTextTrans)
    page6.to(".page6text strong", 1.3, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
    }, "+=2")
    page6.to(".page6text", 1, ideaTextTransLeave, "+=5.5")

    // 记录当前时间
    currentDuration += page6.duration()+2;


    // -------------------- page 7 --------------------
    const page7 = new TimelineMax({delay: currentDuration}+1);

    page7.from(".page7text", 1.5, ideaTextTrans)
    page7.to(".page7text", 1.5, ideaTextTransLeave, "+=5.5")

    // 记录当前时间
    currentDuration += page7.duration()+2;

    // -------------------- page 8 --------------------
    const page8 = new TimelineMax({delay: currentDuration}+1);

    page8.from(
        ".page8text",
        1, {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0,
        },
        "+=1.5"
    )
    .to(
        ".page8text span",
        1, {
            rotation: 90,
            x: 8,
        },
        "+=2"
    )
    .to(
        ".page8text",
        1, {
            scale: 0.2,
            opacity: 0,
        },
        "+=5.5"
    )

    // 记录当前时间
    currentDuration += page8.duration()+1;


    // -------------------- page9 BigText --------------------
    const page9BigText = new TimelineMax({delay: currentDuration});

    page9BigText.staggerFrom(
        ".bingText span",
        1.2, {
            scale: 3,
            opacity: 0,
            rotation: 15,
            ease: Expo.easeOut,
        },
        0.3
    )
    page9BigText.staggerTo(
        ".bingText span",
        1.2, {
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: Expo.easeOut,
        },
        0.3,
        "+=3.5"
    )

    // 记录当前时间
    currentDuration += page9BigText.duration()+1;



    // -------------------- summary --------------------
    const baloons = new TimelineMax({delay: currentDuration});

    // 气球
    baloons.staggerFromTo(
        ".baloons img",
        8, {
            opacity: 0.9,
            y: 1400,
        }, {
            opacity: 1,
            y: -1000,
        },
        0.3
    )

    // 记录当前时间
    currentDuration += page9BigText.duration();
    console.log(currentDuration);


    const profilePicAndOther = new TimelineMax(
        {delay: currentDuration - page9BigText.duration()/2});
    
    // 照片
    profilePicAndOther.from(
        ".profile-picture",
        2, {
            scale: 3.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
        }
    )

// Hat
    .from(".hat", 1, {
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0,
    })


// wish-hbd
    .staggerFrom(
        ".wish-hbd span",
        1, {
            opacity: 0,
            y: -50,
            rotation: 150,
            skewX: "30deg",
            ease: Elastic.easeOut.config(1, 0.5),
        },
        0.15
    )

    .staggerFromTo(
        ".wish-hbd span",
        1, {
            scale: 1.4,
            rotationY: 150,
        }, {
            scale: 1,
            rotationY: 0,
            color: "#ff69b4",
            ease: Expo.easeOut,
        },
        0.15,
        "label"
    )
    
    // wishText
    .from(
        ".wish h5",
        0.5, {
            opacity: 0,
            y: 10,
            skewX: "-15deg",
        },
        "label"
    )

    // 气泡
    .staggerTo(
        ".firework svg",
        6, {
            visibility: "visible",
            opacity: 0,
            scale: 30,
            repeat: 30,
            repeatDelay: 0.5,
        },
        0.6
    )


}
