import { fromJS } from 'immutable';

const defaultState = fromJS({
	topicList: [{
		id:1,
		title:"社会热点",
		imgUrl:"https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
	},{
		id:2,
		title:"养生",
		imgUrl:"https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
	},{
		id:3,
		title:"体育",
		imgUrl:"https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
	},{
		id:4,
		title:"经济",
		imgUrl:"https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
	},{
		id:5,
		title:"旅游",
		imgUrl:"https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
	},{
		id:6,
		title:"茶艺",
		imgUrl:"https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
	},{
		id:7,
		title:"美食",
		imgUrl:"https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
	},{
		id:8,
		title:"政治",
		imgUrl:"https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
	},{
		id:9,
		title:"科技",
		imgUrl:"https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
	}],
	articleList:[
		{
			id:1,
			title:"疫情结束了，我想去离婚",
			desc:"晚上闺蜜发来消息，说过了疫情，要去办离婚手续，这回彻底心凉了。 闺蜜两口子都是事业单位职工，两人有个儿子今年上高一，日子一直过得安宁舒适，至少外...",
			imgUrl:"https://upload-images.jianshu.io/upload_images/8357505-951bf44017330232.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
			diamond: 52.7,
			writer: 'writer',
			comment: 106,
			like: "460"
		},
		{
			id:2,
			title:"一个女人是否“随便”，看她身上这3个地方，很清楚",
			desc:"现在越来越多的人，把婚姻看作非必需品，这当中除了与女性普遍受教育程度提高了，就是很多人对待婚姻的态度发生了很大的变化。不想做传宗接代的工具，遇人...",
			imgUrl:"https://upload-images.jianshu.io/upload_images/11864358-622c38825ebb854e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
			diamond: 24.5,
			writer: 'writer',
			comment: 145,
			like: "410"
		},
		{
			id:3,
			title:"纯洁的男女关系",
			desc:"深夜，一对年轻男女来到一家宾馆。 “开两个单间！”男的拿着身份证说。 “不好意思，现在房间住满了，只剩一个标准间了。”前台小姐说。 男的看了一眼...",
			imgUrl:"https://upload-images.jianshu.io/upload_images/8494499-0f50889c21dc82bf?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
			diamond: 29.4,
			writer: 'writer',
			comment: 529,
			like: "257"
		},
		{
			id:4,
			title:"无声的炫耀",
			desc:"邻居家女儿远嫁外地，本来这件事情，就让邻居很生气，可是无奈女儿喜欢呀，他们两口子也犟不过，就答应了。 结婚以后，生了个女儿，四年后又生了个女儿，...",
			imgUrl:"https://upload-images.jianshu.io/upload_images/1202579-a96c50c56723acf3?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
			diamond: 53.0,
			writer: 'writer',
			comment: 158,
			like: "573"
		},
		{
			id:5,
			title:"成年人的爱情，懂事，真的很重要",
			desc:"纵使对方足够爱你，能理解你的“不懂事”，也该明白，爱情不仅需要互相偎依，也需要各有空间。 成年人的爱情，尤为如此。 之前逛某论坛时，经常会看到这...",
			imgUrl:"https://upload-images.jianshu.io/upload_images/10472974-fec650cf6e635908.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
			diamond: 62.5,
			writer: 'writer',
			comment: 529,
			like: "108"
		}],
		writerList:[
		{	
			id:1,
			imgUrl:"https://upload.jianshu.io/users/upload_avatars/4287007/b7b9c810-069e-4385-aec7-1823e94ee43d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
			name:"晖宗聊绘画",
			word:"173.1k",
			like:"2.6k"
		},
		{
			id:2,
			imgUrl:"https://upload.jianshu.io/users/upload_avatars/7133325/f4370cf6-cf4d-4839-9b54-87beaa767d48?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
			name:"Hob霍比特人",
			word:"257.2k",
			like:"1.1k"
		},
		{
			id:3,
			imgUrl:"https://upload.jianshu.io/users/upload_avatars/1300228/1169f257-ab3b-44f2-bed2-57282511eb8f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
			name:"青冥浩荡不见底",
			word:"50.5k",
			like:"150"
		},
		{
			id:4,
			imgUrl:"https://upload.jianshu.io/users/upload_avatars/8723996/5b2500d0-9768-4d3e-831c-47526ec444ed.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
			name:"旸晓昆",
			word:"137.4k",
			like:"437"
		},
		{
			id:5,
			imgUrl:"https://upload.jianshu.io/users/upload_avatars/4263857/34d7b217-7338-48fe-81a1-98367fecdbee.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
			name:"王小麦",
			word:"138.6k",
			like:"20.6k"
		}
		]
});

export default (prevState = defaultState,action)=>{
	switch (action.type) {
		default:
			return prevState;
	}
}