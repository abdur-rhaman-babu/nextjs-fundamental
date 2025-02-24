import Image from "next/image";
import Link from "next/link";

const Services = () => {
  const medicines = [
    {
      id: "1",
      name: "Napa (Paracetamol)",
      price: 1.5,
      description: "A commonly used pain reliever and fever reducer.",
      image: "https://i.ibb.co.com/kBTtQy4/Paracetamol-Tablet.jpg",
    },
    {
      id: "2",
      name: "Moisturizing Cream",
      price: 12.99,
      description: "A dermatologist-approved hydrating cream for dry skin.",
      image: "https://i.ibb.co.com/9bRjzKJ/analgesic-gel.jpg",
    },
    {
      id: "3",
      name: "Insulin Injection",
      price: 29.99,
      description: "A fast-acting insulin injection for diabetes management.",
      image: "https://i.ibb.co.com/P9QzXXb/injection.png",
    },
    {
      id: "4",
      name: "Vitamin C Syrup",
      price: 8.49,
      description:
        "An immunity-boosting syrup with vitamin C and antioxidants.",
      image: "https://i.ibb.co.com/VVkfGTV/Calcium-Tablet.jpg",
    },
    {
      id: "5",
      name: "Antibiotic Injection",
      price: 25.99,
      description:
        "A strong antibiotic injection used to treat bacterial infections.",
      image: "https://i.ibb.co.com/XYXG2s4/oinment.png",
    },
  ];

  return (
    <div>
      <div>
        {medicines.map((medicate) => {
          return (
            <div key={medicate.id}>
              <Link href={`/services/${medicate.id}`}>
                <div>
                  <Image
                    src={medicate.image}
                    alt={medicate.name}
                    width={200}
                    height={200}
                    quality={80}
                  />
                  <h1>{medicate.name}</h1>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
