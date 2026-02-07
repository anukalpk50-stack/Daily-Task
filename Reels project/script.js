const reels = [
    {
        username: "alex_adventures",
        likeCount: 15200,
        caption: "Exploring the mountains 🏔️ #adventure",
        video: "/video/1.mp4",
        commentCount: "500",
        userProfile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=60",
        shareCount: "3.5k",
        isFollowed: true,
        isLiked: false,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60"
    },
    {
        username: "foodie_jane",
        likeCount: 8900,
        caption: "Delicious pasta for dinner 🍝 #foodie",
        video: "/video/2.mp4",
        commentCount: "200",
        userProfile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
        shareCount: "1.2k",
        isFollowed: false,
        isLiked: true,
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&auto=format&fit=crop&q=60"
    },
    {
        username: "tech_insider",
        likeCount: 22000,
        caption: "The future of AI is here 🤖 #tech",
        video: "/video/3.mp4",
        commentCount: "1.1k",
        userProfile: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop&q=60",
        shareCount: "5k",
        isFollowed: true,
        isLiked: false,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=60"
    },
    {
        username: "fitness_mike",
        likeCount: 10500,
        caption: "Morning workout routine 💪 #fitness",
        video: "/video/4.mp4",
        commentCount: "300",
        userProfile: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=60",
        shareCount: "800",
        isFollowed: false,
        isLiked: true,
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&auto=format&fit=crop&q=60"
    },
    {
        username: "nature_lover",
        likeCount: 30000,
        caption: "Peaceful forest walk 🌲 #nature",
        video: "/video/5.mp4",
        commentCount: "800",
        userProfile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60",
        shareCount: "4.1k",
        isFollowed: true,
        isLiked: false,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&auto=format&fit=crop&q=60"
    },
    {
        username: "urban_style",
        likeCount: 18000,
        caption: "City lights at night 🌃 #urban",
        video: "/video/6.mp4",
        commentCount: "450",
        userProfile: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&auto=format&fit=crop&q=60",
        shareCount: "2.3k",
        isFollowed: false,
        isLiked: true,
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&auto=format&fit=crop&q=60"
    },
    {
        username: "pet_paradise",
        likeCount: 40000,
        caption: "Cute kitten playing 🐱 #cats",
        video: "/video/7.mp4",
        commentCount: "2k",
        userProfile: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=60",
        shareCount: "10k",
        isFollowed: true,
        isLiked: false,
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=60"
    },
    {
        username: "music_vibes",
        likeCount: 25000,
        caption: "Live concert energy 🎸 #music",
        video: "/video/8.mp4",
        commentCount: "900",
        userProfile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60",
        shareCount: "6k",
        isFollowed: false,
        isLiked: true,
        image: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=600&auto=format&fit=crop&q=60"
    },
    {
        username: "art_daily",
        likeCount: 12000,
        caption: "Sketching in the park ✏️ #art",
        video: "/video/9.mp4",
        commentCount: "150",
        userProfile: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&auto=format&fit=crop&q=60",
        shareCount: "1.5k",
        isFollowed: true,
        isLiked: false,
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=60"
    },
    {
        username: "coffee_addict",
        likeCount: 9500,
        caption: "Morning brew ☕ #coffee",
        video: "/video/10.mp4",
        commentCount: "350",
        userProfile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60",
        shareCount: "2k",
        isFollowed: false,
        isLiked: true,
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&auto=format&fit=crop&q=60"
    }
];
var allReels = document.querySelector('.all-reels');


function addData(){
var sum = '';

reels.forEach(function (elem,idx) {
    sum = sum + `<div class="reel">
                  <video autoplay loop ${elem.isMuted ? 'muted' : ''} src="${elem.video}"></video>
                 
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">

                            <h4>${elem.username}</h4>
                            <button id="${idx}" class="follow">${elem.isFollowed ? 'Following' : 'Follow'}</button>
                            <h3>${elem.caption}</h3>
                        </div>
                    </div>

                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon"><i id="${idx}" class="love ${elem.isLiked ? 'ri-heart-3-fill' : 'ri-heart-3-line'}" style="color: ${elem.isLiked ? 'red' : ''}"></i></h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>    
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-line"></i></h4>
                        </div>
                    </div>
                </div>`

})
allReels.innerHTML = sum;
}

addData()

allReels.addEventListener('click', function (dets) {
    if (dets.target.classList.contains('love')) {
        var index = dets.target.id;
        if (reels[index].isLiked) {
            reels[index].likeCount--;
            reels[index].isLiked = false;
            dets.target.classList.remove('ri-heart-3-fill');
            dets.target.classList.add('ri-heart-3-line');
            dets.target.style.color = '';
        } else {
            reels[index].likeCount++;
            reels[index].isLiked = true;
            dets.target.classList.remove('ri-heart-3-line');
            dets.target.classList.add('ri-heart-3-fill');
            dets.target.style.color = 'red';
        }
        dets.target.parentElement.nextElementSibling.innerText = reels[index].likeCount;
    } else if (dets.target.classList.contains('follow')) {
        var index = dets.target.id;
        reels[index].isFollowed = !reels[index].isFollowed;
        if (reels[index].isFollowed) {
            dets.target.innerText = 'Following';
            dets.target.style.backgroundColor = 'transparent';
            dets.target.style.borderColor = 'transparent';
        } else {
            dets.target.innerText = 'Follow';
            dets.target.style.backgroundColor = 'rgb(50,107,176)';
            dets.target.style.borderColor = 'transparent';
        }
    }
})
