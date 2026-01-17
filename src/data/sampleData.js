const sampleData = [
  {
    category: "Aerospace Parts",
    subCategories: [
      {
        subCategory1: "Structural Support",
        subCategory2: [
          {
            itemCode: "ITEM-1234",
            description: "strut for seat mounting",
            quantity: 20,
            rate: 40,
          },
          {
            itemCode: "ITEM-1235",
            description: "strut for seat mounting",
            quantity: 10,
            rate: 20,
          },
        ],
      },
      {
        subCategory1: "Brackets",
        subCategory2: [
          {
            itemCode: "ITEM-1236",
            description: "support strut for seat mounting",
            quantity: 30,
            rate: 10,
          },
          {
            itemCode: "ITEM-1237",
            description: "support strut for seat mounting",
            quantity: 40,
            rate: 70,
          },
        ],
      },
    ],
  },
  {
    category: "Precision Components",
    subCategories: [
      {
        subCategory1: "Fasteners",
        subCategory2: [
          {
            itemCode: "ITEM-2122",
            description: "Titanium aerospace bolt",
            quantity: 30,
            rate: 50,
          },
          {
            itemCode: "ITEM-2123",
            description: "Titanium aerospace bolt",
            quantity: 40,
            rate: 21,
          },
        ],
      },
    ],
  },
];

export default sampleData;
