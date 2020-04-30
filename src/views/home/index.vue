<template>
<div class="parent">
<div class="div1"><ListBox/> </div>
<div class="div2"> <chart-x /></div>
<div class="div3"> <chart-x /></div>
<div class="div4"> </div>
<div class="div5"> </div>
<div class="div6 cal-right"> <cal /></div>
<div class="div7"> </div>
</div>
</template>

<script>
import ListBox from '@/components/navbar/index'
import ChartX from '@/components/chartX/index'
import Cal from '@/components/calendar/index'
export default {
    components: {
    ListBox,
    ChartX,
    Cal
  }
}
</script>

<style>
.parent {
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: 1fr 2fr repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.cal-right {
    margin-right: auto;
}

.div1 { grid-area: 1 / 1 / 2 / 3; }
.div2 { grid-area: 2 / 1 / 3 / 2; }
.div3 { grid-area: 2 / 2 / 3 / 3; }
.div4 { grid-area: 2 / 3 / 3 / 4; }
.div5 { grid-area: 2 / 4 / 3 / 5; }
.div6 { grid-area: 2 / 5 / 3 / 5; }
.div7 { grid-area: 3 / 1 / 6 / 6; }
</style>
