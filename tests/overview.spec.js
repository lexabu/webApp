/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import 'regenerator-runtime/runtime.js';
import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import Overview from '../client/src/components/Overview.jsx';
import StyleSelector from '../client/src/components/Overview/StyleSelector.jsx';
import AddToCart from '../client/src/components/Overview/AddToCart.jsx';
import Gallery from '../client/src/components/Overview/Gallery.jsx';
import testData from './testdata.js';
import '@testing-library/jest-dom';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('Overview product rating negative test suite', () => {
  it('Should not display star ratings if there are no reviews', () => {
    const { product } = testData;
    let { styles, reviews } = testData;
    styles = styles.data.results;
    reviews = [];
    render(<Overview product={product} styles={styles} reviews={reviews} />);
    expect(screen.queryByText('Read all 0 reviews', { exact: false })).toBeNull();
    expect(screen.queryAllByAltText('full star').length).toBe(0);
    expect(screen.queryAllByAltText('empty star').length).toBe(0);
  });
});

describe('Product information test suite', () => {
  beforeEach(async () => {
    const { product } = testData;
    let { styles, reviews } = testData;
    styles = styles.data.results;
    reviews = reviews.data.results;
    await render(<Overview product={product} styles={styles} reviews={reviews} />);
  });

  it('Should display star ratings for each product, and a link to view all ratings', async () => {
    const totalReviews = testData.reviews.data.results.length;
    await waitFor(() => expect(screen.getByText(`Read all ${totalReviews} reviews`, { exact: false })).not.toBeNull());
    await waitFor(() => expect(screen.getAllByAltText('full star').length).toBe(5));
    await waitFor(() => expect(screen.getAllByAltText('empty star').length).toBe(5));
  });

  it('Should display product title, category, price and overview information', async () => {
    expect(screen.getByText(testData.product.category.toUpperCase())).toBeVisible();
    expect(screen.getByText(testData.product.name)).toBeVisible();
    expect(screen.getByText(`$${testData.product.default_price}`)).toBeVisible();
    expect(screen.getByText(testData.product.slogan)).toBeVisible();
    expect(screen.getByText(testData.product.description)).toBeVisible();
  });
  it('Should update product price when a different style is selected', async () => {
    const styles = screen.getAllByRole('cell');
    fireEvent.click(styles[1]);
    expect(screen.getByText(`$${testData.styles.data.results[1].original_price}`)).toBeVisible();
  });
  it('Should display links to share on social media', async () => {
    expect(screen.getByRole('link', { name: 'facebook' })).toBeVisible();
    expect(screen.getByRole('link', { name: 'twitter' })).toBeVisible();
    expect(screen.getByRole('link', { name: 'pinterest' })).toBeVisible();
  });
});

describe('Style Selector test suite', () => {
  const styles = testData.styles.data.results;
  const defaultStyle = styles.filter((style) => style['default?'])[0];
  const clickHandler = jest.fn().mockName('test');

  beforeEach(() => {
    render(<StyleSelector
      currentStyle={defaultStyle}
      styles={styles}
      changeStyle={clickHandler}
    />);
  });

  it('should display Style Selector for products with current style name and thumbnails', async () => {
    expect(screen.getByText(defaultStyle.name)).toBeVisible();
    expect(screen.getAllByRole('img').length).toBe(styles.length);
  });

  it('should overlay a checkmark on the currently selected style (default selection is the first style) ', () => {
    expect(screen.getByRole('cell', { name: `${defaultStyle.name} ✓` })).toBeVisible();
  });

  it('should pass a clicked style into the click handler ', () => {
    fireEvent.click(screen.getByRole('cell', { name: styles[1].name }));
    expect(clickHandler).toHaveBeenCalledWith(styles[1]);
  });
});

describe('Add to Cart test suite', () => {
  it('Should display size and quantity selectors', () => {
    const styles = testData.styles.data.results;
    const defaultStyle = styles.filter((style) => style['default?'])[0];

    const container = document.createElement('div');
    document.body.appendChild(container);

    render(<AddToCart currentStyle={defaultStyle} />, container);
    expect(screen.getAllByRole('combobox').length).toBe(1);
  });

  it('Should show OUT OF STOCK and hide Add to Cart button for a style with no stock', () => {
    const blankStyle = { skus: [] };
    render(<AddToCart currentStyle={blankStyle} />);
    expect(screen.getByText('OUT OF STOCK')).not.toBeNull();
    expect(screen.queryByRole('button')).toBeNull();
  });
});

describe('Image Gallery test suite', () => {
  it('Should display a main image', async () => {
    const currentStyle = testData.styles.data.results[0];
    currentStyle.photos = [
      {
        url: 'https://google.com/main1',
        thumbnail_url: 'https://google.com/main1',
      },
      {
        url: 'https://google.com/main2',
        thumbnail_url: 'https://google.com/main2',
      },
      {
        url: 'https://google.com/main3',
        thumbnail_url: 'https://google.com/main3',
      },
    ];
    const currentImage = 1;

    render(<Gallery
      currentStyle={currentStyle}
      currentImage={currentImage}
      key={currentStyle.style_id}
      updateImage={() => {}}
    />);
    // Make sure each image URL from the passed in obj is rendered
    const images = screen.getAllByRole('img');
    const imageUrls = [];
    images.forEach((image) => imageUrls.push(image.src));
    currentStyle.photos.forEach((photo) => {
      // expect(imageUrls.includes(photo.thumbnail_url)).toBe(true);
    });
  });
});
