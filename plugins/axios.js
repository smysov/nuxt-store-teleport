export default function settings({ $axios }) {
  $axios.onResponse((config) => config.data);
}
