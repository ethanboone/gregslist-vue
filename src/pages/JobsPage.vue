<template>
  <div class="container">
    <div class="row my-4">
      <div class="col">
        <h2>Jobs</h2>
        <button class="btn btn-success">
          +
        </button>
      </div>
    </div>
    <div class="row">
      <Job v-for="job in state.jobs" :key="job.id" :job="job" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import Job from '../components/JobComponent'
import { AppState } from '../AppState'
import { jobsService } from '../services/JobsService'

export default {
  name: 'JobsPage',
  setup() {
    const state = reactive({
      loading: true,
      jobs: computed(() => AppState.jobs)
    })

    onMounted(async() => {
      try {
        await jobsService.getJobs()
        state.loading = false
      } catch (e) {
        console.error(e)
      }
    })
    return {
      state
    }
  },
  components: {
    Job
  }
}
</script>

<style scoped>

</style>
