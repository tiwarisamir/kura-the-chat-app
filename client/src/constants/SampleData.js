export const samplechats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Samir Tiwari",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Samir Tiwari2",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },

  {
    avatar: [
      "https://www.w3schools.com/howto/img_avatar.png",
      "https://www.w3schools.com/howto/img_avatar.png",
      "https://www.w3schools.com/howto/img_avatar.png",
      "https://www.w3schools.com/howto/img_avatar.png",
    ],
    name: "Samir Tiwari2",
    _id: "3",
    groupChat: false,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "Sam Tiwa",
    _id: "1",
  },
  {
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "Sam Tiwa22",
    _id: "2",
  },
];
export const sampleNotification = [
  {
    sender: {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Sam Tiwa",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Sam Tiwa22",
    },

    _id: "2",
  },
];

export const sampleMessage = [
  {
    // attachments: [
    //   {
    //     public_id: "doodskmd",
    //     url: "https://www.w3schools.com/howto/img_avatar.png",
    //   },
    // ],
    content: " Lorem ipsum dolor.",
    _id: "pdospdlmpomcoikoa",
    sender: {
      _id: "user._id",
      name: "smao",
    },
    chat: "chatId",
    createdAt: "2024-05-16T10:52:30.6302",
  },
  {
    attachments: [
      {
        public_id: "doodskm222d",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    // content: " 2222 Lorem ipsum dolor .",
    _id: "pdosp1122dlmpo",
    sender: {
      _id: "dkmodkmsamd",
      name: "smao 2",
    },
    chat: "chatId",
    createdAt: "2024-05-16T11:52:38.6302",
  },
];

export const dashboardData = {
  users: [
    {
      name: "kfl as",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "1",
      username: "josdhn_doe",
      friends: 20,
      groups: 5,
    },
    {
      name: "kfl as 22",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "2",
      username: "josdhn_doe_22",
      friends: 20,
      groups: 23,
    },
  ],
  chats: [
    {
      name: "sdm sk",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "jid lsssf",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "sdmsmd 222 sk",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: true,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "jid 222 lsssf",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],
  messages: [
    {
      attachments: [],
      content: "l;fmd kdksdkjn dsk",
      _id: "kdslskdlskdl",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "sakdk",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-02-12T10:41:30.651Z",
    },
    {
      attachments: [
        {
          public_id: "askdm 2",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "",
      _id: "kdslsdslskdlskdl",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "sakdk 22",
      },
      chat: "chatId",
      groupChat: true,
      createdAt: "2024-02-12T10:41:30.655Z",
    },
  ],
};
