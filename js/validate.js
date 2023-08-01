const MAX_TAGS_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const isValidTag = (tag) => tag === '' || tag.trim().split(' ').filter((hashtag) => Boolean (hashtag.length)).every((hashtag) => (VALID_SYMBOLS.test(hashtag)));

const isValidCount = (tags) => tags.trim().split(' ').filter((tag) => Boolean (tag.length)).length <= MAX_TAGS_COUNT;

const isUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value.trim().split(' ').filter((tag) => tag.trim().length);
  return isUniqueTags(tags);
};

const commentLen = (comment) => comment.length < 140;

export { isValidCount, isValidTag, validateTags, commentLen };
