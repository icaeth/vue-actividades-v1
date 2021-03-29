<template>
  <div
    id="minefield"
    oncontextmenu="return false;"
  >
    <!-- renderizado del tablero -->
    <div    
      v-for="row in minefield"
      :key="row.x"
      class="row"
    >
      <MinefieldCell
        v-for="cell in row"
        :key="cell.y" 
        :cell-data="cell"
        :bomb-icon="bombIcon"
        :flag-icon="flagIcon"
        @onCellLeftClicked="onCellLeftClicked"
        @onCellRightClicked="onCellRightClicked"
      />
    </div>
  </div>
</template>

<script>
import MinefieldCell from "@/components/MinefieldCell"
export default {
    components: {
      MinefieldCell,
    },
    props: {
        minefield: {
          type: Array,
          default: null
          },
        bombIcon: {
            type: String,
            default: "💣"
        },
        flagIcon: {
            type: String,
            default: "❗" 
        }
    },
    data() {
        return {}
    },
    methods: {
      // Emit click en las cuadrículas al tablero original
        onCellLeftClicked(coords) {
            this.$emit('onCellLeftClicked', coords)
        },
        onCellRightClicked(coords) {
            this.$emit('onCellRightClicked', coords)
        }
    },
}
</script>

<style lang="scss">
#minefield {
    overflow: auto;
    margin: 6px auto 18px auto;
}

.row {
    display: table;
    margin: 0 auto;
}
</style>
