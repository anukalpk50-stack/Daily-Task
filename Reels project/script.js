const reels = [
    {
        username: "alex_adventures",
        likeCount: "15.2k",
        caption: "Exploring the mountains 🏔️ #adventure",
        video: "/video/1.mp4",
        userProfile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=60",
        shareCount: "3.5k",
        isFollowed: true,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60"
    },
    {
        username: "foodie_jane",
        likeCount: "8.9k",
        caption: "Delicious pasta for dinner 🍝 #foodie",
        video: "/video/2.mp4",
        userProfile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
        shareCount: "1.2k",
        isFollowed: false,
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&auto=format&fit=crop&q=60"
    },
    {
        username: "tech_insider",
        likeCount: "22k",
        caption: "The future of AI is here 🤖 #tech",
        video: "/video/3.mp4",
        userProfile: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop&q=60",
        shareCount: "5k",
        isFollowed: true,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=60"
    },
    {
        username: "fitness_mike",
        likeCount: "10.5k",
        caption: "Morning workout routine 💪 #fitness",
        video: "/video/4.mp4",
        userProfile: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=60",
        shareCount: "800",
        isFollowed: false,
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&auto=format&fit=crop&q=60"
    },
    {
        username: "nature_lover",
        likeCount: "30k",
        caption: "Peaceful forest walk 🌲 #nature",
        video: "/video/5.mp4",
        userProfile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60",
        shareCount: "4.1k",
        isFollowed: true,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&auto=format&fit=crop&q=60"
    },
    {
        username: "urban_style",
        likeCount: "18k",
        caption: "City lights at night 🌃 #urban",
        video: "/video/6.mp4",
        userProfile: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&auto=format&fit=crop&q=60",
        shareCount: "2.3k",
        isFollowed: false,
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&auto=format&fit=crop&q=60"
    },
    {
        username: "pet_paradise",
        likeCount: "40k",
        caption: "Cute kitten playing 🐱 #cats",
        video: "/video/7.mp4",
        userProfile: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=60",
        shareCount: "10k",
        isFollowed: true,
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=60"
    },
    {
        username: "music_vibes",
        likeCount: "25k",
        caption: "Live concert energy 🎸 #music",
        video: "/video/8.mp4",
        userProfile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60",
        shareCount: "6k",
        isFollowed: false,
        image: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=600&auto=format&fit=crop&q=60"
    },
    {
        username: "art_daily",
        likeCount: "12k",
        caption: "Sketching in the park ✏️ #art",
        video: "/video/9.mp4",
        userProfile: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&auto=format&fit=crop&q=60",
        shareCount: "1.5k",
        isFollowed: true,
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=60"
    },
    {
        username: "coffee_addict",
        likeCount: "9.5k",
        caption: "Morning brew ☕ #coffee",
        video: "/video/10.mp4",
        userProfile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60",
        shareCount: "2k",
        isFollowed: false,
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&auto=format&fit=crop&q=60"
    }
];
var sum = '';
reels.forEach(function (elem) {
    sum = sum + `<div class="reel">
                  <video autoplay loop muted  src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="https://images.unsplash.com/photo-1655398153245-2f769bab021e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNoaWxkJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D"
                                alt="">
                            <h4>Ashi_sharma__</h4>
                            <button>Follow</button>
                            <h3>Lorem ipsum dolor sit amet ............</h3>
                        </div>
                    </div>

                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon"><i class="ri-heart-3-line"></i></h4>
                            <h6>200</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>68</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>5k</h6>    
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-line"></i></h4>
                        </div>
                    </div>
                </div>`

})
var allReels = document.querySelector('.all-reels');
allReels.innerHTML = sum;