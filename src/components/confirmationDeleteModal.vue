<template>
  <div class="modal fade" id="confirmationModal" tabindex="-1" aria-labelledby="confirmationModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
							<div class="div_modal_form modal-body">
								<h3 class="messageDeleteModal">{{message}}</h3>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-secondary btn-lg btnModalSecondary" data-bs-dismiss="modal">Cancel</button>
								<button type="button" class="btn btn-primary btn-lg btnModalSuccess" v-on:click="confirmDelete()">Confirm</button>
							</div>
					</div>
        </div>
    </div>
</template>
<script>
export default {
	name: "confirmationModal",
  data(){
    return{
			message:'',
			assetId:''
    }
  },
	methods:{
		confirmDelete(){
			this.$emit("confirm",this.assetId)
			$('#confirmationModal').modal('hide')
		}
	}
}
</script>