import Image from "next/image";
import React from "react";

import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  //   const post = await getPost(params.slug)

  return {
    title: "This is a static title",
    description: "This is a static description.",
    openGraph: {
      title: "This is a static title",
      description: "This is a static description.",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "This is a static title",
      description: "This is a static description.",
    },
  };
}

const page = () => {
  return (
    <div className="flex flex-col items-center gap-10 px-10">
      <p className="text-4xl font-bold text-center pt-10">Blog Page!</p>
      <Image
        src="/assets/city_lights.jpg"
        alt="blog"
        width={1200}
        height={1200}
      />
      <p className="pb-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas quis rem
        inventore beatae aut culpa, esse accusantium sint rerum molestias optio
        eius, at et autem impedit necessitatibus iure nostrum voluptatum saepe
        deleniti. Dignissimos quod ut non unde, molestias, cupiditate temporibus
        error, pariatur vel quos atque voluptate eveniet. Corporis laudantium ab
        distinctio quos, delectus quis itaque molestiae ipsam quod provident
        modi quisquam nulla illum dolorum assumenda porro consequuntur nihil! Ea
        dolorum quasi, illum exercitationem placeat iste obcaecati aut
        repudiandae culpa a debitis laboriosam officia, doloremque incidunt
        provident. Possimus, voluptatum. Sapiente, error ipsum numquam sit quasi
        aliquid quis magnam eligendi ullam. Optio numquam labore magni accusamus
        perspiciatis officiis laboriosam, quo eos omnis aut dolorem earum libero
        excepturi tempora placeat sint architecto, enim odit repellat fugiat
        nihil vel? Non, praesentium commodi! Vitae mollitia tenetur eius. Iste,
        tempore nobis. Accusantium quisquam ea fugit magnam est itaque culpa
        praesentium cum ad dolore. Labore hic soluta vero, quod quaerat dolore
        culpa. Velit animi veniam enim, quae esse illum sequi porro? Nisi
        distinctio deserunt, quia ratione accusantium unde atque sint neque
        consequuntur nulla numquam natus voluptate nam quo. Natus, et!
        Distinctio fugiat sunt odio recusandae doloribus iusto dolores corrupti
        maiores blanditiis! Cumque a dolor fuga doloribus odio ab debitis,
        aspernatur sapiente nostrum id, fugit ipsum eligendi totam amet iure
        saepe at. Rerum porro id quod corrupti ullam mollitia libero omnis,
        voluptate doloribus accusantium, sint obcaecati deserunt accusamus dicta
        tempora nostrum hic modi placeat sequi reiciendis dolore a possimus
        fugiat. Ratione accusantium atque repellat, porro nulla sed voluptate
        numquam repellendus facilis, modi pariatur consectetur deserunt tempore.
        Alias perferendis quibusdam itaque harum, ad illum libero repellat
        quidem quam. Nulla dolore magnam facere, corporis consequatur tenetur
        fuga magni, quidem autem veniam deleniti rerum neque labore ipsum. Et
        dicta vero molestiae nisi corporis. Neque, voluptatem voluptates beatae
        aliquam natus ipsa praesentium! <br /> <br /> Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Quas quis rem inventore beatae aut
        culpa, esse accusantium sint rerum molestias optio eius, at et autem
        impedit necessitatibus iure nostrum voluptatum saepe deleniti.
        Dignissimos quod ut non unde, molestias, cupiditate temporibus error,
        pariatur vel quos atque voluptate eveniet. Corporis laudantium ab
        distinctio quos, delectus quis itaque molestiae ipsam quod provident
        modi quisquam nulla illum dolorum assumenda porro consequuntur nihil! Ea
        dolorum quasi, illum exercitationem placeat iste obcaecati aut
        repudiandae culpa a debitis laboriosam officia, doloremque incidunt
        provident. Possimus, voluptatum. Sapiente, error ipsum numquam sit quasi
        aliquid quis magnam eligendi ullam. Optio numquam labore magni accusamus
        perspiciatis officiis laboriosam, quo eos omnis aut dolorem earum libero
        excepturi tempora placeat sint architecto, enim odit repellat fugiat
        nihil vel? Non, praesentium commodi! Vitae mollitia tenetur eius. Iste,
        tempore nobis. Accusantium quisquam ea fugit magnam est itaque culpa
        praesentium cum ad dolore. Labore hic soluta vero, quod quaerat dolore
        culpa. Velit animi veniam enim, quae esse illum sequi porro? Nisi
        distinctio deserunt, quia ratione accusantium unde atque sint neque
        consequuntur nulla numquam natus voluptate nam quo. Natus, et!
        Distinctio fugiat sunt odio recusandae doloribus iusto dolores corrupti
        maiores blanditiis! Cumque a dolor fuga doloribus odio ab debitis,
        aspernatur sapiente nostrum id, fugit ipsum eligendi totam amet iure
        saepe at. Rerum porro id quod corrupti ullam mollitia libero omnis,
        voluptate doloribus accusantium, sint obcaecati deserunt accusamus dicta
        tempora nostrum hic modi placeat sequi reiciendis dolore a possimus
        fugiat. Ratione accusantium atque repellat, porro nulla sed voluptate
        numquam repellendus facilis, modi pariatur consectetur deserunt tempore.
        Alias perferendis quibusdam itaque harum, ad illum libero repellat
        quidem quam. Nulla dolore magnam facere, corporis consequatur tenetur
        fuga magni, quidem autem veniam deleniti rerum neque labore ipsum. Et
        dicta vero molestiae nisi corporis. Neque, voluptatem voluptates beatae
        aliquam natus ipsa praesentium!
      </p>
    </div>
  );
};

export default page;
