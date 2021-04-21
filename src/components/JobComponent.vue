<template>
  <div class="car col-md-6 mb-3">
    <!-- Route parameter getting set with the Params object -->
    <router-link :to="{name: 'JobDetails', params: { id: job.id }}">
      <div class="card shadow">
        <div class="card-body">
          <h4 class="card-title">
            {{ job.jobTitle }} | {{ job.company }}
          </h4>
          <p>{{ job.description }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Job',
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>
