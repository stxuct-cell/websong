module.exports = [
"[project]/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
'use client';
;
;
;
// Dynamic import prevents Next.js Turbopack SSR errors
const YouTube = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-youtube/dist/YouTube.esm.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function Page() {
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentSongIndex, setCurrentSongIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const playerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const playlist = [
        {
            id: 'wDFxqgAb2XE',
            title: 'Anisuthide Yako Indu',
            subtitle: 'Sonu Nigam • Mungaru Male (2006)'
        },
        {
            id: 'Zs-3RgNyT-s',
            title: 'Nooru Janmaku',
            subtitle: 'Rajesh Krishnan • America America (1997)'
        },
        {
            id: 'euKf7CN04wU',
            title: 'Ninnindale',
            subtitle: 'Sonu Nigam • Milana (2007)'
        },
        {
            id: '1ZnULthnjJI',
            title: 'Sanju Mattu Geetha',
            subtitle: 'Shreya Ghoshal • Sanju Weds Geetha (2011)'
        },
        {
            id: '7ejK75eCPOI',
            title: 'Baanallu Neene',
            subtitle: 'P. Susheela • Bayalu Daari (1976)'
        },
        {
            id: 'M4SG5do_2mc',
            title: 'Belageddu',
            subtitle: 'Vijay Prakash • Kirik Party (2016)'
        },
        {
            id: 'lnVeVAvOojA',
            title: 'Sadha Ninna Kannali',
            subtitle: 'Kiccha Sudeep • Bachchan (2013)'
        },
        {
            id: '-1TEJkzEgYc',
            title: 'Ee Sanje Yakaagide',
            subtitle: 'Tarun Chandra & Kirat Bhattal • Geleya (2007)'
        },
        {
            id: '8HbwsAOfoRY',
            title: 'Jotheyali Jothe Jotheyali',
            subtitle: 'Shankar Nag & Akshatha Rao • Geetha (1981)'
        },
        {
            id: 'Dajcwrykmf8',
            title: 'Naguva Nayana',
            subtitle: 'SPB & S Janaki • Pallavi Anupallavi (1983)'
        },
        {
            id: 'WqKNfmmYgSI',
            title: 'Neene Sakida Gini',
            subtitle: 'SPB • Manasa Sarovara (1982)'
        },
        {
            id: 'PyJammsePPA',
            title: 'Endendu Ninnanu',
            subtitle: 'PB Sreenivas • Eradu Kanasu (1974)'
        },
        {
            id: '_6HCl1boPdU',
            title: 'Neenu Banda Mele',
            subtitle: 'Sonu Nigam & Nanditha • Krishna (2007)'
        },
        {
            id: 'tEAvA9SNJ4Y',
            title: 'Nammura Mandara Hoove',
            subtitle: 'SPB & Chithra • Nammura Mandara Hoove (1996)'
        },
        {
            id: 'e5byqxOkzRw',
            title: 'Tunturu Alli Nira',
            subtitle: 'Chithra • Amrithadhare (2005)'
        },
        {
            id: 'wmlvDnOAaQk',
            title: 'Hrudayave Ninna Hesarige',
            subtitle: 'Ramesh Aravind & Malashree • Belli Modagalu (1992)'
        },
        {
            id: 'zecRgZYi-kw',
            title: 'Minchaagi Neenu',
            subtitle: 'Sonu Nigam • Gaalipata (2008)'
        },
        {
            id: 'B5QMIiWXQyI',
            title: 'Ee Sundara Beladingala',
            subtitle: 'SPB & Chithra • Amrutha Varshini (1997)'
        },
        {
            id: '7CS11BGmP98',
            title: 'Kanasalu Neene',
            subtitle: 'SPB • Bayalu Daari (1976)'
        },
        {
            id: 'E640TvPtjro',
            title: 'Omme Ninnannu',
            subtitle: "S. Janaki • Gaali Maathu (1981)"
        },
        {
            id: 'wWyp0RyCK-k',
            title: 'Ullasada Hoomale',
            subtitle: 'Karthik • Cheluvina Chittara (2007)'
        },
        {
            id: 'RtvhA4GQ_l4',
            title: 'summane summane',
            subtitle: ' Bombay Jayashree • Jothe Jotheyali (2006)'
        },
        {
            id: 'UST192Oop8M',
            title: 'Kariya I Love You',
            subtitle: 'Gurukiran • Kariya (2003)'
        },
        {
            id: 'EnddNPFnzSA',
            title: 'Huttidare Kannada',
            subtitle: 'Dr. Rajkumar • Aakasmika (1993)'
        },
        {
            id: 'QrCQyRSoEtY',
            title: 'Mungaru Maleye',
            subtitle: 'Sonu Nigam • Mungaru Male (2006)'
        },
        {
            id: 'uzrHxCutbdk',
            title: 'Jenina Holeyo',
            subtitle: 'Dr. Rajkumar • Chalisuva Modagalu (1982)'
        },
        {
            id: 'PjYRNaAucg8',
            title: 'Neerabittu Nelada',
            subtitle: 'SPB • Hombisilu (1978)'
        },
        {
            id: 'msHTvQ8WSHU',
            title: 'Belli Moda',
            subtitle: 'S Janaki • Belli Moda (1967)'
        },
        {
            id: 'hP5MF8dB7_I',
            title: 'Yeno Onthara',
            subtitle: 'shaan • Hudugaru (2011)'
        },
        {
            id: 'rpwBjp_QwPs',
            title: 'Yarivalu (Baninda Jaridantha)',
            subtitle: 'Udit Narayan • Gowramma (2005)'
        },
        {
            id: 'wZDAJnVmC0s',
            title: 'Tunga Teera Viraji',
            subtitle: 'P Susheela • Sharapanjara (1971)'
        },
        {
            id: 'vFqBfAGmsdQ',
            title: 'Naa Hadide (Hombisilu Album)',
            subtitle: 'SPB • Hombisilu (1978)'
        },
        {
            id: 'VTeCQi5d6rg',
            title: 'O Meghave Meghave',
            subtitle: 'Raghuveer & Sindhu • Shrungara Kavya (1993)'
        },
        {
            id: 'bXLaHZScwSo',
            title: 'Eradu Kanasu (Endendu Ninnanu)',
            subtitle: 'PB Sreenivas • Eradu Kanasu (1974)'
        },
        {
            id: 'c_co5Dgbrz4',
            title: 'Shrungara Kavya',
            subtitle: 'Raghuveer & Sindhu • Shrungara Kavya (1993)'
        },
        {
            id: 'L_d4NglYuVM',
            title: 'Ambara Chumbitha Prema',
            subtitle: 'Raghuveer & Sindhu • Shrungara Kavya (1993)'
        },
        {
            id: 'TtiiRluiLUg',
            title: 'Jivva Hoovagide',
            subtitle: 'Dr. Rajkumar • Nee Nanna Gellalare (1981)'
        },
        {
            id: 'QDWi1rQpifs',
            title: 'Tharikere Eri Mele',
            subtitle: 'SPB • Devara Duddu (1977)'
        },
        {
            id: '9dtaiMx6Rl4',
            title: 'Aakashave Beelali Mele',
            subtitle: 'PB Sreenivas • Nyayave Devaru (1971)'
        },
        {
            id: 'tlrFAoi-ncE',
            title: ' Yaarige Yaaru ilri',
            subtitle: '"Snehaloka • Rajesh Krishnan • Hamsalekha"'
        },
        {
            id: 'S3TrOFSQaCA',
            title: 'Hele Kogile',
            subtitle: 'K S Chithra • Nammura Mandara Hoove (1996)'
        },
        {
            id: 'NfRPK1Ri8-k',
            title: 'Preetse Preetse',
            subtitle: 'Hemanth Kumar • Preetse (2000)'
        },
        {
            id: 'Ef1ZSrEKT7A',
            title: 'Yare Neenu Cheluve',
            subtitle: 'SPB • Naanu Nanna Hendthi (1999)'
        },
        {
            id: 'FSflxAAmEco',
            title: 'Olave Vismaya',
            subtitle: 'Sonu Nigam • Aithalakkadi (2010)'
        },
        {
            id: '0QCoFQVrYu8',
            title: 'Appa I Love You',
            subtitle: 'Anuradha Bhat • Chowka (2017)'
        },
        {
            id: '8v34Fvv90Us',
            title: 'Nodivalandava',
            subtitle: 'Prem • The Villain (2018)'
        },
        {
            id: 'XXUFa18YN8I',
            title: 'Pankaja',
            subtitle: 'Gurukiran • Hudugaru (2011)'
        }
    ];
    const currentSong = playlist[currentSongIndex];
    const thumbnailUrl = `https://img.youtube.com/vi/${currentSong.id}/mqdefault.jpg`;
    const formatTime = (time)=>{
        if (isNaN(time) || time === 0) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
    // FIX 1: Add "async/await" so we get real numbers instead of Promise objects
    const onReady = async (event)=>{
        playerRef.current = event.target;
        try {
            const dur = await event.target.getDuration();
            setDuration(dur || 0);
        } catch (e) {}
    };
    const onStateChange = async (event)=>{
        try {
            const dur = await event.target.getDuration();
            setDuration(dur || 0);
        } catch (e) {}
        if (event.data === 1) setIsPlaying(true);
        if (event.data === 2) setIsPlaying(false);
    };
    const togglePlay = ()=>{
        if (playerRef.current) {
            if (isPlaying) {
                playerRef.current.pauseVideo();
            } else {
                playerRef.current.playVideo();
            }
        }
    };
    // FIX 2: Reset the time to 0 when changing songs
    const nextSong = ()=>{
        if (currentSongIndex < playlist.length - 1) {
            setCurrentSongIndex((prev)=>prev + 1);
            setCurrentTime(0);
            setDuration(0);
        }
    };
    const prevSong = ()=>{
        if (currentSongIndex > 0) {
            setCurrentSongIndex((prev)=>prev - 1);
            setCurrentTime(0);
            setDuration(0);
        }
    };
    // FIX 3: Make the interval async so the progress bar updates properly
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isPlaying) {
            timerRef.current = setInterval(async ()=>{
                if (playerRef.current && playerRef.current.getCurrentTime) {
                    try {
                        const time = await playerRef.current.getCurrentTime();
                        setCurrentTime(time || 0);
                    } catch (e) {}
                }
            }, 1000);
        } else {
            clearInterval(timerRef.current);
        }
        return ()=>clearInterval(timerRef.current);
    }, [
        isPlaying
    ]);
    const progressPercent = duration > 0 ? currentTime / duration * 100 : 0;
    // FIX 4: Add "origin" to prevent YouTube from blocking certain music videos
    const videoOpts = {
        playerVars: {
            autoplay: 1,
            controls: 0,
            origin: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'http://localhost:3000'
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'relative',
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            backgroundColor: 'black',
            fontFamily: 'sans-serif'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/kannada-bg.jpg",
                alt: "Nostalgic Background",
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.8
                }
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');`
                }
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    position: 'absolute',
                    top: '12%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    margin: 0,
                    color: 'transparent',
                    WebkitTextStroke: '2px rgba(255, 255, 255, 0.9)',
                    fontFamily: '"Black Ops One", cursive',
                    fontSize: 'clamp(3rem, 8vw, 7rem)',
                    fontWeight: '400',
                    letterSpacing: '8px',
                    textAlign: 'center',
                    pointerEvents: 'none',
                    textShadow: '0 15px 30px rgba(0, 0, 0, 0.8)'
                },
                children: "ನಮ್ಮ ಬೆಂಗಳೂರು"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '-9999px',
                    left: '-9999px',
                    width: '300px',
                    height: '300px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(YouTube, {
                    videoId: currentSong.id,
                    opts: videoOpts,
                    onReady: onReady,
                    onStateChange: onStateChange,
                    onEnd: nextSong
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 180,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: '30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '90%',
                    maxWidth: '700px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '100px',
                    padding: '8px 24px 8px 8px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.4)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            flex: 1,
                            minWidth: 0,
                            paddingRight: '20px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: thumbnailUrl,
                                alt: "Thumbnail",
                                style: {
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    border: '2px solid rgba(255,255,255,0.9)',
                                    flexShrink: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '4px',
                                    minWidth: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '0px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: 'white',
                                                    fontWeight: '800',
                                                    fontSize: '15px',
                                                    whiteSpace: 'nowrap',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis'
                                                },
                                                children: currentSong.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 218,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: 'rgba(255,255,255,0.7)',
                                                    fontSize: '12px',
                                                    fontWeight: '500',
                                                    whiteSpace: 'nowrap',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis'
                                                },
                                                children: currentSong.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 221,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '3px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '100%',
                                                    height: '3px',
                                                    backgroundColor: 'rgba(255,255,255,0.2)',
                                                    borderRadius: '2px',
                                                    position: 'relative'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: `${progressPercent}%`,
                                                        height: '100%',
                                                        backgroundColor: 'white',
                                                        borderRadius: '2px',
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        transition: 'width 1s linear'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 229,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 228,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: 'rgba(255,255,255,0.8)',
                                                    fontSize: '10px',
                                                    fontWeight: 'bold'
                                                },
                                                children: [
                                                    formatTime(currentTime),
                                                    " / ",
                                                    formatTime(duration)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 231,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(255,255,255,0.15)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 243,
                                        columnNumber: 81
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 243,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: prevSong,
                                style: {
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: 'white',
                                    padding: '6px'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "18",
                                    height: "18",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M6 6h2v12H6zm3.5 6l8.5 6V6z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 247,
                                        columnNumber: 81
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: togglePlay,
                                style: {
                                    width: '46px',
                                    height: '46px',
                                    borderRadius: '50%',
                                    backgroundColor: 'white',
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'black'
                                },
                                children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 252,
                                        columnNumber: 83
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 252,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "24",
                                    height: "24",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    style: {
                                        marginLeft: '2px'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M8 5v14l11-7z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 254,
                                        columnNumber: 113
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 254,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: nextSong,
                                style: {
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: 'white',
                                    padding: '6px'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "18",
                                    height: "18",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 259,
                                        columnNumber: 81
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: 'white',
                                    padding: '6px'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "18",
                                    height: "18",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 263,
                                        columnNumber: 82
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 263,
                                    columnNumber: 14
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 158,
        columnNumber: 4
    }, this);
}
}),
"[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
"[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return dynamic;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-ssr] (ecmascript)"));
function dynamic(dynamicOptions, options) {
    const loadableOptions = {};
    if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    }
    const mergedOptions = {
        ...loadableOptions,
        ...options
    };
    return (0, _loadable.default)({
        ...mergedOptions,
        modules: mergedOptions.loadableGenerated?.modules
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/shared/lib/deployment-id.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getAssetToken: null,
    getAssetTokenQuery: null,
    getDeploymentId: null,
    getDeploymentIdQuery: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getAssetToken: function() {
        return getAssetToken;
    },
    getAssetTokenQuery: function() {
        return getAssetTokenQuery;
    },
    getDeploymentId: function() {
        return getDeploymentId;
    },
    getDeploymentIdQuery: function() {
        return getDeploymentIdQuery;
    }
});
let deploymentId;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    // Client side: replaced with globalThis.NEXT_DEPLOYMENT_ID
    // Server side: left as is or replaced with a string or replaced with false
    deploymentId = ("TURBOPACK compile-time value", false) || undefined;
}
function getDeploymentId() {
    return deploymentId;
}
function getDeploymentIdQuery(ampersand = false) {
    let id = getDeploymentId();
    if (id) {
        return `${ampersand ? '&' : '?'}dpl=${id}`;
    }
    return '';
}
function getAssetToken() {
    return ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ("TURBOPACK compile-time value", false);
}
function getAssetTokenQuery(ampersand = false) {
    let id = getAssetToken();
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return '';
}
}),
"[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "encodeURIPath", {
    enumerable: true,
    get: function() {
        return encodeURIPath;
    }
});
function encodeURIPath(file) {
    return file.split('/').map((p)=>encodeURIComponent(p)).join('/');
}
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This has to be a shared module which is shared between client component error boundary and dynamic component
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BailoutToCSRError: null,
    isBailoutToCSRError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
class BailoutToCSRError extends Error {
    constructor(reason){
        super(`Bail out to client-side rendering: ${reason}`), this.reason = reason, this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
}
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BailoutToCSR", {
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
function BailoutToCSR({ reason, children }) {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return children;
}
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-ssr] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-ssr] (ecmascript)");
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    // Check "default" prop before accessing it, as it could be client reference proxy that could break it reference.
    // Cases:
    // mod: { default: Component }
    // mod: Component
    // mod: { default: proxy(Component) }
    // mod: proxy(Component)
    const hasDefault = mod && 'default' in mod;
    return {
        default: hasDefault ? mod.default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        // If it's non-SSR or provided a loading component, wrap it in a suspense boundary
        const hasSuspenseBoundary = !opts.ssr || !!opts.loading;
        const Wrap = hasSuspenseBoundary ? _react.Suspense : _react.Fragment;
        const wrapProps = hasSuspenseBoundary ? {
            fallback: fallbackElement
        } : {};
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                ("TURBOPACK compile-time truthy", 1) ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : "TURBOPACK unreachable",
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                    ...props
                })
            ]
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Wrap, {
            ...wrapProps,
            children: children
        });
    }
    LoadableComponent.displayName = 'LoadableComponent';
    return LoadableComponent;
}
const _default = Loadable;
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreloadChunks", {
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _encodeuripath = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-ssr] (ecmascript)");
const _deploymentid = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/deployment-id.js [app-ssr] (ecmascript)");
function PreloadChunks({ moduleIds }) {
    // Early return in client compilation and only load requestStore on server side
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore === undefined) {
        return null;
    }
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (workStore.reactLoadableManifest && moduleIds) {
        const manifest = workStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const chunks = manifest[key].files;
            allFiles.push(...chunks);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    const query = (0, _deploymentid.getAssetTokenQuery)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((chunk)=>{
            const href = `${workStore.assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(chunk)}${query}`;
            const isCss = chunk.endsWith('.css');
            // If it's stylesheet we use `precedence` o help hoist with React Float.
            // For stylesheets we actually need to render the CSS because nothing else is going to do it so it needs to be part of the component tree.
            // The `preload` for stylesheet is not optional.
            if (isCss) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    // @ts-ignore
                    precedence: "dynamic",
                    href: href,
                    rel: "stylesheet",
                    as: "style",
                    nonce: workStore.nonce
                }, chunk);
            } else {
                // If it's script we use ReactDOM.preload to preload the resources
                (0, _reactdom.preload)(href, {
                    as: 'script',
                    fetchPriority: 'low',
                    nonce: workStore.nonce
                });
                return null;
            }
        })
    });
}
}),
];

//# sourceMappingURL=_1ut7x-x._.js.map