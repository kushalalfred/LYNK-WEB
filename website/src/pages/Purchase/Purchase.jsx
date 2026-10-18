import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import { addOnOptions, configurations } from "../../data/products";
import { useCart } from "../../context/CartContext";

export default function Purchase() {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [selectedConfig, setSelectedConfig] = useState(configurations[0]);
  const [selectedAddOns, setSelectedAddOns] = useState({});
  const purchaseRef = useRef(null);
  const productImageRef = useRef(null);
  const previousConfigId = useRef(null);

  const currentAddOns = selectedAddOns[selectedConfig.id] || {};
  const addOnTotal = addOnOptions.reduce(
    (total, addOn) => total + (currentAddOns[addOn.id] ? addOn.price : 0),
    0
  );
  const totalPrice = selectedConfig.price + addOnTotal;

  useEffect(() => {
    const context = gsap.context(() => {
      const entrance = gsap.timeline({ defaults: { ease: 'power2.out' } });
      entrance
        .fromTo(
          '.purchase-gallery',
          { autoAlpha: 0, x: -36 },
          { autoAlpha: 1, x: 0, duration: 0.65 }
        )
        .fromTo(
          '.purchase-details',
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.55 },
          '-=0.4'
        )
        .fromTo(
          '.purchase-thumbnail',
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.08 },
          '-=0.25'
        );
    }, purchaseRef);

    return () => context.revert();
  }, []);

  useEffect(() => {
    if (previousConfigId.current && previousConfigId.current !== selectedConfig.id) {
      gsap.fromTo(
        productImageRef.current,
        { autoAlpha: 0, scale: 0.96 },
        { autoAlpha: 1, scale: 1, duration: 0.4, ease: 'power2.out' }
      );
    }

    previousConfigId.current = selectedConfig.id;
  }, [selectedConfig.id]);

  const toggleAddOn = (addOnId) => {
    setSelectedAddOns((current) => ({
      ...current,
      [selectedConfig.id]: {
        ...current[selectedConfig.id],
        [addOnId]: !current[selectedConfig.id]?.[addOnId],
      },
    }));
  };

  const addConfigurationToCart = () => {
    const selectedAddOnDetails = addOnOptions.filter(
      (addOn) => currentAddOns[addOn.id]
    );
    const addOnIds = selectedAddOnDetails
      .map((addOn) => addOn.id)
      .sort();

    addItem({
      id: `${selectedConfig.id}:${addOnIds.join(",")}`,
      name: `LYNK Badge Holder - ${selectedConfig.name}`,
      subtitle: selectedConfig.subtitle,
      image: selectedConfig.image,
      unitPrice: totalPrice,
      addOns: selectedAddOnDetails,
    });
    navigate("/cart");
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-[#F7F5F0]" ref={purchaseRef}>
      <div className='w-full px-4 lg:px-[70px] py-10 max-w-[1400px] mx-auto  '>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start'>
          
          {/* LEFT COLUMN: Image Showcase & Gallery */}
          <div className='lg:col-span-7 flex flex-col gap-4 purchase-gallery'>
            {/* Main Large Image Display Area */}
            <div className='w-full h-[380px] sm:h-[480px] bg-slate-100 rounded-3xl border border-slate-200 flex flex-col items-center justify-center relative overflow-hidden shadow-inner group'>
              {selectedConfig.image ? (
                <img
                  ref={productImageRef}
                  src={selectedConfig.image}
                  alt={selectedConfig.name}
                  className='w-full h-full object-contain p-6 transition-all duration-300'
                />
              ) : (
                <div className='text-center p-6'>
                  <div className='w-16 h-16 bg-slate-200 text-slate-500 rounded-2xl flex items-center justify-center mx-auto mb-3 font-semibold text-lg'>
                    LYNK
                  </div>
                  <p className='text-slate-500 font-medium text-sm'>
                    Image Placeholder: <span className='text-slate-800 font-semibold'>{selectedConfig.name}</span>
                  </p>
                  <p className='text-xs text-slate-400 mt-1'>
                    (Connect image source path for `{selectedConfig.id}.jpeg`)
                  </p>
                </div>
              )}

              {/* Badge */}
              {selectedConfig.tag && (
                <span className='absolute top-4 left-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full'>
                  {selectedConfig.tag}
                </span>
              )}
            </div>

            {/* Thumbnail Selectors underneath */}
            <div className='grid grid-cols-4 gap-3'>
              {configurations.map((config) => {
                const isSelected = selectedConfig.id === config.id;
                return (
                  <button
                    key={config.id}
                    type='button'
                    onClick={() => setSelectedConfig(config)}
                    className={`purchase-thumbnail h-20 rounded-xl border-2 flex items-center justify-center p-2 text-xs text-center font-medium transition-all duration-200 ${
                      isSelected
                        ? 'border-[#162032]  bg-indigo-50/50 text-indigo-900 shadow-sm'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span className='line-clamp-2'>{config.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Product Details & Interactive Configuration */}
          <div className='lg:col-span-5 flex flex-col justify-between purchase-details'>
            <div>
              {/* Header / Title */}
              <div className='border-b border-slate-200 pb-4 mb-6'>
                <span className='text-xs font-bold tracking-widest text-[#162032]  uppercase'>
                  Modular ID System
                </span>
                <h1 className='text-3xl font-extrabold text-slate-900 mt-1'>
                  LYNK Card and Key Holder
                </h1>
                <div className='mt-2' aria-live='polite'>
                  <p className='text-2xl font-bold text-slate-900'>
                    ${totalPrice.toFixed(2)}{' '}
                    <span className='text-xs font-normal text-slate-500'>NZD</span>
                  </p>
                  <p className='text-xs text-slate-500 mt-1'>
                    Holder ${selectedConfig.price.toFixed(2)}
                    {addOnTotal > 0 && ` + $${addOnTotal.toFixed(2)} add-ons`}
                  </p>
                </div>
              </div>

              {/* Option Selector Cards */}
              <div className='space-y-3 mb-6'>
                <label className='block text-sm font-semibold text-slate-700 mb-1'>
                  Select Configuration Option:
                </label>

                {configurations.map((config) => {
                  const isSelected = selectedConfig.id === config.id;
                  return (
                    <div
                      key={config.id}
                      onClick={() => setSelectedConfig(config)}
                      className={`cursor-pointer p-4 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between ${
                        isSelected
                          ? 'border-[#162032] bg-indigo-50/40 ring-1 ring-[#162032] '
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className='flex items-center gap-3'>
                        <input
                          type='radio'
                          name='lynk-config'
                          checked={isSelected}
                          onChange={() => setSelectedConfig(config)}
                          className='h-4 w-4 text-[#162032]  focus:ring-indigo-500 border-slate-300'
                        />
                        <div>
                          <div className='flex items-center gap-2'>
                            <p className='font-semibold text-slate-900 text-sm'>
                              {config.name}
                            </p>
                            {config.tag && (
                              <span className='bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded'>
                                {config.tag}
                              </span>
                            )}
                          </div>
                          <p className='text-xs text-slate-500 mt-0.5'>
                            {config.subtitle}
                          </p>
                        </div>
                      </div>
                      <span className='font-bold text-slate-900 text-sm whitespace-nowrap pl-2'>
                        ${config.price.toFixed(2)}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Optional accessories */}
              <fieldset className='space-y-3 mb-6'>
                <legend className='block text-sm font-semibold text-slate-700 mb-2'>
                  Add optional accessories:
                </legend>
                {addOnOptions.map((addOn) => (
                  <label
                    key={addOn.id}
                    className={`flex cursor-pointer items-center justify-between gap-4 rounded-2xl border-2 bg-white p-4 transition-colors ${
                      currentAddOns[addOn.id]
                        ? 'border-[#162032] bg-indigo-50/40 ring-1 ring-[#162032]'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className='flex items-center gap-3'>
                      <input
                        type='checkbox'
                        checked={Boolean(currentAddOns[addOn.id])}
                        onChange={() => toggleAddOn(addOn.id)}
                        className='h-4 w-4 rounded border-slate-300 text-[#162032] focus:ring-indigo-500'
                      />
                      <span>
                        <span className='block text-sm font-semibold text-slate-900'>
                          {addOn.name}
                        </span>
                        <span className='mt-0.5 block text-xs text-slate-500'>
                          {addOn.description}
                        </span>
                      </span>
                    </span>
                    <span className='whitespace-nowrap text-sm font-bold text-slate-900'>
                      +${addOn.price.toFixed(2)}
                    </span>
                  </label>
                ))}
              </fieldset>

              {/* Description & Included Features */}
              <div className='bg-slate-50 rounded-2xl p-4 border border-slate-200 mb-6'>
                <h4 className='text-xs font-bold text-slate-700 uppercase tracking-wider mb-2'>
                  Configuration Details
                </h4>
                <p className='text-sm text-slate-600 leading-relaxed mb-3'>
                  {selectedConfig.description}
                </p>
                <ul className='grid grid-cols-2 gap-2 text-xs text-slate-700 font-medium'>
                  {selectedConfig.features.map((feature, idx) => (
                    <li key={idx} className='flex items-center gap-1.5'>
                      <svg
                        className='w-4 h-4 text-emerald-500 flex-shrink-0'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex gap-3'>
              <button
                type='button'
                onClick={addConfigurationToCart}
                className='flex-1 bg-[#162032]  hover:bg-indigo-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors duration-200 shadow-sm text-center text-sm'
              >
                Add Configuration to Cart
              </button>
 
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}