import Image from './index'
import { StoryFn, Meta } from '@storybook/react'
import Coverage from '../../../../public/assets/image/CoverageImage.svg'
import Home from '../../../../public/assets/image/BackgrounImage.png'
export default {
  title: 'Atoms/Image',
  component: Image,
} as Meta

const Template: StoryFn<typeof Image> = (args) => <Image {...args} />

export const HomeCoverageImage = Template.bind({})
HomeCoverageImage.args = {
  src: Coverage,
  alt: 'home',
}

export const HomeBackGroundImage = Template.bind({})
HomeBackGroundImage.args = {
  src: Home,
  alt: 'home',
}
