import { Input } from 'antd';

import '../styles/searchBox.css'

const { Search } = Input;

interface SearchBoxProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({ onChange }: SearchBoxProps) => {
  return (

    <div className='searchbox_input'>
      <Search
        placeholder="search character by name"
        allowClear
        onChange={onChange}
      />
    </div>
  )
}

export default SearchBox