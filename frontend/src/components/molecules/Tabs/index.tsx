import Typography from '@/components/atoms/Typography'
import theme from '@/theme'
import { Tabs as MuiTabs, Tab, styled } from '@mui/material'

interface ITabs {
  tabValues: string[]
  deActiveTabColor: string
}
const DeActiveTab = styled(Tab)({
  borderRadius: theme.spacing(0.5),
  padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
  marginRight: theme.spacing(10),
})

const ActiveTab = styled(Tab)({
  borderRadius: theme.spacing(0.5),
  borderBottom: `2px solid ${theme.palette.primary.main}`,
  marginRight: theme.spacing(10),
})

const ActiveTypo = styled(Typography)({
  color: theme.palette.text.highEmphasis,
})

const TabContainer = styled(MuiTabs)({
  borderBottom: `0.5px solid ${theme.palette.ampsec.STROKE_100}`,
  gap: theme.spacing(10),
  width: '100%',
  height: '2.25rem',
})
const Tabs = ({ tabValues, deActiveTabColor }: ITabs) => {
  return (
    <TabContainer data-testid="tabs" value={0}>
      {tabValues &&
        tabValues.length > 0 &&
        tabValues.map((value, ind) =>
          ind === 0 ? (
            <ActiveTab
              key={value}
              label={<ActiveTypo variant="button" label={value} />}
            />
          ) : (
            <DeActiveTab
              key={value}
              label={
                <Typography
                  color={deActiveTabColor}
                  variant="body4"
                  label={value}
                />
              }
            />
          )
        )}
    </TabContainer>
  )
}

export default Tabs
