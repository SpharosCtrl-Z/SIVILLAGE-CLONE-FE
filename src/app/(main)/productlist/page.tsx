import React, { Suspense } from 'react';
import {
  getCategoryProducts,
  getProductDetailByProductCode,
} from '@/actions/products/productActions';
// import { ProductType } from '@/types/ResponseTypes';
import { dummyProductDataList } from '@/datas/dummyProductData';
import { CategoryLevel } from '@/types/productTypes';
import { productcodelist } from '@/types/ResponseTypes';
import ProductListCard from '@/components/layouts/ProductListCard';
import ProductListCardSkeleton from '@/components/skeletons/ProductListCardSkeleton';

const page = async ({
  searchParams,
}: {
  searchParams: {
    topCategoryName?: string | undefined;
    middleCategoryName?: string | undefined;
    bottomCategoryName?: string | undefined;
    subCategoryName?: string | undefined;
  };
}) => {
  // console.log(searchParams);

  const getProducts = await getCategoryProducts(
    searchParams.topCategoryName !== 'undefined'
      ? searchParams.topCategoryName
      : null,
    searchParams.middleCategoryName !== 'undefined'
      ? searchParams.middleCategoryName
      : null,
    searchParams.bottomCategoryName !== 'undefined'
      ? searchParams.bottomCategoryName
      : null,
    searchParams.subCategoryName !== 'undefined'
      ? searchParams.subCategoryName
      : null
  );

  const productDetails = await Promise.allSettled(
    getProducts.content.map((product: productcodelist) =>
      getProductDetailByProductCode(product.productCode)
    )
  );

  const successfulProductDetails = productDetails
    .filter((result) => result.status === 'fulfilled') // 성공한 것만 필터링
    .map((result) => (result as PromiseFulfilledResult<any>).value); // 성공한 결과에서 값만 추출

  console.log('액션 통해서 받아온 상품 상세 데이터', productDetails);

  return (
    <main className="mb-[50px]">
      <section className="px-6 py-10">
        <ul className="grid grid-cols-2 justify-between gap-4">
          {successfulProductDetails.map((productData, index) => (
            <Suspense key={index} fallback={<ProductListCardSkeleton />}>
              <ProductListCard productData={productData} />
            </Suspense>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default page;
