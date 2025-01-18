<script>
  let subject = "";
  let message = "";

  let mailLink = "mailto:redazione@dentrolatecnologia.it?subject=" + subject + "&body=" + message;
</script>

<div>
  <form class="text-left space-y-5">
    <div>
      <label for="subject" class="block text-xs font-medium text-gray-700">Oggetto</label>
      <input bind:value={subject} type="email" id="subject" placeholder="Oggetto" class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" />
    </div>

    <div>
      <label for="message" class="block text-xs font-medium text-gray-700">Messaggio</label>
      <textarea bind:value={message} id="message" placeholder="Messaggio" class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" />
    </div>

    <div class="flex items-end justify-end">
      <a class="button btn-primary" href={mailLink}>Invia</a>
    </div>
  </form>
</div>
